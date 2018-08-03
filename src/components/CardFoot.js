import React, { Component } from 'react';
import {Dropdown, MenuItem, Nav} from 'react-bootstrap';
import { Provider, connect } from 'react-redux';
import '../styles/Home.css';
import '../styles/CardFoot.css';
import lst from './CustomToggle2.js';
import {
  postLinkOnFolder, isFavorite, isArchive, deleteLinkOnFolder
} from '../actions.js'
const CustomToggle2 = lst[0];
const CustomMenu2 = lst[1];

class CardFoot extends Component {
    constructor() {
      super();
      this.state = {
        isFav: false,
        isArch: false
      }
    }
    componentWillMount(){
      console.log("CARD FOOT MOUNTING")
      this.getFav();
      this.getArch();
    }
    async handleArchive(){
      const [folder] = this.props.folders.filter(f => 
        f.name === "Archive"
      )
      if (this.state.isArch){
        await this.props.dispatch(deleteLinkOnFolder(this.props.link, folder.id, false))
        this.setState({isArch: false, isFav: this.state.isFav})
      }
      else{
        await this.props.dispatch(postLinkOnFolder(folder.id, this.props.link.id))
        this.setState({isArch: true, isFav: this.state.isFav})
      }
    }
    async handleFavorite(){
      const [folder] = this.props.folders.filter(f => 
        f.name === "Favorites"
      )
      if (this.state.isFav){
        await this.props.dispatch(deleteLinkOnFolder(this.props.link, folder.id, false))
        this.setState({isFav: false, isArch: this.state.isArch})
      }
      else{
        await this.props.dispatch(postLinkOnFolder(folder.id, this.props.link.id))
        this.setState({isFav: true, isArch: this.state.isArch})
      }
    }
    async handleDelete(){
      if (this.props.activeFolder.id){
        await this.props.dispatch(deleteLinkOnFolder(this.props.link, this.props.activeFolder.id))
      }
      else{
        await this.props.dispatch(deleteLinkOnFolder(this.props.link))
      }
    }
    async getFav(){
      const [fav] = this.props.folders.filter(f => 
        f.name === "Favorites"
      )
      const bool = await this.props.dispatch(isFavorite(this.props.link.id, fav.id)) 
      if (bool){
        this.setState({isArch: this.state.isArch, isFav: true})
      }
    }
    async getArch(){
      const [arch] = this.props.folders.filter(f =>   
        f.name === "Archive"
      )
      const bool = await this.props.dispatch(isArchive(this.props.link.id, arch.id)) 
      if (bool){
        this.setState({isFav: this.state.isFav, isArch: true})
      }
    }
    render() {
      var text = this.props.url.substr(0,23)
      if (text.length === 23){text += '...'}
      return (
        <div id="footer">
            <p>{text}</p>
            <span id="footSpan" class='pull-right'>
                <a href='#' info="Place in folder" id="tooltip" onClick={()=>this.props.forward()}><i class='material-icons'>forward</i></a>
                <a href='#' info="Archive" id="tooltip">
                  <i style={this.state.isArch ? {color: "#7ED321"} : null} class='material-icons' onClick={()=>this.handleArchive()}>archive</i>
                </a>
                <a href='#' info="Favroite" id="tooltip">
                  <i style={this.state.isFav ? {color: "#7ED321"} : null} class='material-icons' onClick={()=>this.handleFavorite()}>favorite</i>
                </a>
                <a href='#' info="Delete" id="tooltip"><i class='material-icons' onClick={()=>this.handleDelete()}>delete</i></a>
            </span>
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return{
    isFetching: state.isFetching,
    currentUser: state.currentUser,
    activeFolder: state.activeFolder,
    folders: state.folders,
  }
}

export default connect(mapStateToProps)(CardFoot); 