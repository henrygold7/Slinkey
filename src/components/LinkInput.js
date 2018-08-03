import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../styles/Home.css';
import '../styles/LinkInput.css';

class LinkInput extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.wrappedClick = this.props.onClick
      }
      getValue(){
        return document.getElementById('input').value;
      }
      render() {
        return (
          <input id='input' placeholder='http://' onClick={this.handleClick}  />
        )
      }
      handleClick(evt) {
        // Prevent the root click handler from closing the dropdown
        evt.nativeEvent.stopPropagation()
      }
    }
  
  
  export default LinkInput; 
 

  //<Input onClick={this.handleClick} {...otherProps} />
  //{...otherProps}
  //        let otherProps = _.omit(this.props, ['onClick', 'bsRole'])