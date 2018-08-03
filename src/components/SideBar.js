import React, { Component } from 'react';
import {Dropdown, MenuItem, DropdownButton} from 'react-bootstrap';
import { Provider, connect } from 'react-redux';
import lst from './CustomToggle.js';
import {
    requestFolders, 
    postFolder, 
    activateFolder, 
    deactivateFolder, 
    requestLinks,
    deleteFolder
  } from '../actions.js'
import '../styles/Home.css';
import '../styles/SideBar.css';

const CustomToggle = lst[0];
const CustomMenu = lst[1];

class SideBar extends Component {
    constructor(){
        super();
        this.grabFolder = this.grabFolder.bind(this)
        this.deleteFolder = this.deleteFolder.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(requestFolders(this.props.currentUser.id.toString()));
    }
    async deleteFolder(obj){
        await this.props.dispatch(deleteFolder(obj));
        if (this.props.activeFolder.id === obj.id){
            document.getElementById('myLinks').click()
        }
        return;
    }
    grabFolder(obj){
        const active = this.props.activeFolder === obj;
        return(
            <li>
                <a onClick={async ()=>{this.props.handler(obj)}} href="#" style={active ? {color: "#7ED321"}: {}}>{obj.name}</a>
                {
                    obj.name !== 'Favorites' && obj.name !== 'Archive' ?
                    <a href='#'><i onClick={()=>this.deleteFolder(obj)} class="material-icons" id="closeFolder">delete</i></a> : null
                }
            </li>
        )
    }
    render() {
        const folders = this.props.folders.map(this.grabFolder);
        return(
            <ul id="folderLst" className='pull-left'>
                <li><a id='myLinks' onClick={async ()=>{this.props.handler()}} href="#" viewBox='0 0 10 10' >My Links</a></li>
                <li><hr/></li>
                {folders}
                <Dropdown id="dropdown-custom-menu">
                    <CustomToggle bsRole="toggle">
                        <a info="New folder" id="tooltip"><i id='new_folder_icon' className='material-icons'>create_new_folder</i></a>
                    </CustomToggle>
                    <CustomMenu  bsRole="menu"></CustomMenu>
                </Dropdown>
            </ul>
        )
    }
} 

const mapStateToProps = state => {
    return{
      isFetching: state.isFetching,
      currentUser: state.currentUser,
      activeFolder: state.activeFolder,
      folders: state.folders,
      openLinks: state.openLinks
    }
  }

 
export default connect(mapStateToProps)(SideBar); 



