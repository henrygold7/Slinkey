import React, { Component } from 'react';
import '../styles/Home.css';
import { Provider, connect } from 'react-redux';
import '../styles/Grid.css'
import Card from './Card.js'
import {
    requestLinks, postLinkOnFolder
  } from '../actions.js'
const Promise = require('bluebird');

class Grid extends Component {
    constructor() {
      super();
      this.state = {
        folderInputs: [],
        checked: [],
        openLinks: [],
      }
      this.createCard = this.createCard.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.handleAdd = this.handleAdd.bind(this)
    }
    componentWillMount = async function(){
      const param = this.props.activeFolder.id || this.props.currentUser.id;
      const type = this.props.activeFolder.id ? "folderId" : "userId"
      await this.props.dispatch(requestLinks(param, type));
    }
    componentWillReceiveProps(){
      console.log("GRID RECEIVING PROPS: ", JSON.stringify(this.props))
      this.setInternalStateFromProps();
    }
    createCard(obj){ 
      console.log("Creating card...")  
      return <Card handleAdd={this.handleAdd} folderInputs={this.state.folderInputs} img={obj.img} headerText={obj.headline} url={obj.url} link={obj}/> 
    }
    handleCheck(name){
      this.setState({folderInputs: this.state.folderInputs, checked: this.state.checked.concat(name)})
    }
    async handleAdd(e, link){
      e.preventDefault();
      var folderLst = [];
      this.state.checked.forEach((name)=> {
        const [folder] = this.props.folders.filter(f => f.name === name)
        folderLst.push(folder);
      })
      console.log("Folder list: ",folderLst)
      await Promise.map(folderLst, (f)=>{
        this.props.dispatch(postLinkOnFolder(f.id, link.id))
      })
      // folderLst.forEach((f)=> {
      //   this.props.dispatch(postLinkOnFolder(f.id, link.id))
      // })
      this.setState({checked: []})
      return false
    }
    setInternalStateFromProps(){
      const array = this.props.folders.map((f) => {
        return <span class="formEl"><input type="checkbox" onClick={() => this.handleCheck(f.name)} /><p>{f.name}</p><br/></span>
      })
      this.setState({folderInputs: array, checked: this.state.checked, openLinks: this.props.openLinks})
    }
    render() {
        console.log("GRID RENDERING")
        console.log("OPEN LINKS BEFORE MAP: ",JSON.stringify(this.state.openLinks))
        const cards = this.state.openLinks.map(this.createCard)
        console.log("OPEN LINKS: ",JSON.stringify(this.state.openLinks))
        console.log("CARDS: ",cards)
        const message = this.props.activeFolder.id ? "This folder is empty" : "You don't have any links yet, add some!"
        return (
        <div class='col-lg-10' style={{marginLeft: "3%"}} >
            <h1>{this.props.activeFolder.name || "My Links"}</h1><br/>
            {cards[0] ? cards : <h2>{message}</h2>}
        </div>
        );
    }
  }
  const mapStateToProps = state => {
    return{
      isFetching: state.isFetching,
      currentUser: state.currentUser,
      activeFolder: state.activeFolder,
      openLinks: state.openLinks,
      folders: state.folders
    }
  }
    
  export default connect(mapStateToProps)(Grid);