import React, { Component } from 'react';
import {Dropdown, MenuItem, FormControl} from 'react-bootstrap';
import ReactDOM from 'react-dom';


class CustomToggle2 extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.props.onClick(e);
    }
  
    render() {
      return (
        <a id='toggler' href="" onClick={this.handleClick}>
          {this.props.children}
        </a>
      );
    }
  }
  
  class CustomMenu2 extends Component {
    constructor(props, context) {
      super(props, context);
  
      // this.handleChange = this.handleChange.bind(this);
  
      this.state = { 
        value: ''
      };
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
          <form>
              <input type="checkbox"/>Favorites<br/>
              <input type="checkbox"/>Archive<br/>
              <input type="checkbox"/>Articles<br/>
          </form>
        </div>
      );
    }
  }
  

  export default [CustomToggle2, CustomMenu2]; 