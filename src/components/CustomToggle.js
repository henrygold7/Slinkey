import React, { Component } from 'react';
import {Dropdown, MenuItem, FormControl} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {
  requestFolders, postFolder
} from '../actions.js'
import '../styles/SideBar.css';

class CustomToggle extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.props.onClick(e);
    }

    handleClickOutside(e){
      e.preventDefault();
      this.props.onClick(e);
    }
  
    render() {
      return (
        <a id='toggler' href="" onClick={this.handleClick} onClickOutside={this.handleClickOutside}>
          {this.props.children}
        </a>
      );
    }
  }
  
class CustomMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.state = { 
      value: ''
    };
  }

  handleClick(){
    var folder = document.getElementById('newFolder').value
    if (!folder) return;
    var bool = false;
    this.props.folders.forEach((f) => {
      if (folder === f.name){ bool = true}
    }) 
    if (bool) return;
    console.log("POSTING FOLDER ", folder)
    console.log("SIDBAR'S PROPS ",this.props)
    this.props.dispatch(postFolder(folder, this.props.currentUser.id))
    document.getElementById('newFolder').value = '';
  }

  // handleChange(e) {
  //   this.setState({ value: e.target.value });
  // }

  // focusNext() {
  //   const input = ReactDOM.findDOMNode(this.input);

  //   if (input) {
  //     input.focus();
  //   }
  // }

  render() {
    // const { children } = this.props;
    // const { value } = this.state;
    return (
      <div className="dropdown-menu" style={{ padding: '' }}>
        <input id='newFolder' placeholder='Name'></input>
        <button id="add_button2" onClick = {()=>this.handleClick()}>Create</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    currentUser: state.currentUser,
    folders: state.folders
  }
}

export default [CustomToggle, connect(mapStateToProps)(CustomMenu)];   