import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetching, activateFolder, deactivateFolder, requestLinks, postLink
} from '../actions.js'
import TopNav from './TopNav';
import SideBar from './SideBar';
import Grid from './Grid.js';
import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.handleFolderClick = this.handleFolderClick.bind(this)
  }
  pigeon = async(href)=>{
    const param = this.props.activeFolder.id || null;
    const userId = this.props.currentUser.id
    await this.props.dispatch(postLink(userId, href, "Default Headline", param));
  }
  handleFolderClick = async function (folder=null){
    if (folder){
      await this.props.dispatch(activateFolder(folder));
    }
    else{
      await this.props.dispatch(deactivateFolder());
    }
    const param = this.props.activeFolder.id || this.props.currentUser.id
    const type = this.props.activeFolder.id ? "folderId" : "userId";
    await this.props.dispatch(requestLinks(param, type));
    console.log("request links dispatched: (param, type) = ",param,type);
    return false;
  }
  render() {
    console.log("HOME RENDERING... ")
    return (
      !this.props.currentUser.username ? <Redirect to='/login'/> :
      <div className="App">
        <div className = 'row justify-content-center'>
          <div className='col-10'>
            <TopNav pigeon={this.pigeon}/>
          </div>
        </div>
        <div className = 'row col-12' id='sidebar'>
          <div className='col-sm-1'>
          <SideBar handler={this.handleFolderClick}/>
          </div>
          <div class="spinner" style={this.props.isFetching ? {display: "block"} : {display: "none"}}></div>
          <Grid ref={instance => {this.grid = instance}} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  "mapping state to props..."
  return{
    isFetching: state.isFetching,
    activeFolder: state.activeFolder,
    currentUser: state.currentUser,
    folders: state.folders,
    openLinks: state.openLinks
  }
}

 

export default connect(mapStateToProps)(Home);
 