import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/Card.css';
import CardFoot from './CardFoot.js';

class Card extends Component {
    constructor() {
      super();
      this.toggleForward = this.toggleForward.bind(this)
      this.state = {
        forward: false
      }
    }
    toggleForward(){
      this.setState({forward: !this.state.forward})
    }
    render() {
      // const defaultImg = "http://www.tourniagara.com/wp-content/uploads/2014/10/default-img.gif"
      return (
        <a href={this.props.url}>
        <div id='card' class='col-md-3' style={{backgroundImage: "URL("+this.props.img+")", backgroundPosition: "center"}}>
            <div id="header" >
                <p>{this.props.headerText || "(Headline not found)"}</p>
            </div>
            <form onClick={(e) => {e.stopPropagation(); return false }} id="folderboxes" style={this.state.forward ? null : {maxHeight: "0"}}>
              {this.props.folderInputs}
              <button id="forward" onClick={(e) => {this.props.handleAdd(e, this.props.link); this.toggleForward()}}>Add</button>
            </form>
            <CardFoot forward={this.toggleForward} link={this.props.link} url={this.props.url} />
        </div>
        </a>
      );
    } 
  }
  export default Card; 
  
  
