import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetching,
  requestUser,
} from '../actions.js'
import Home from './Home.js';
import '../styles/Login.css';
import LoginNav from './LoginNav.js'

class Login extends Component {
    constructor() {
      super();
    }
    handleGo(username, password){
        this.props.dispatch(requestUser(username, password));
    }
    render() {
      const error = this.props.loginError;
      const errorStyle = {
          borderWidth: "2px", 
          borderColor: "red"
      }
      return(
        this.props.currentUser.username ? <Redirect to='/home' /> :
        <div className="Login">
            <LoginNav button="Sign Up" link="/"/>
            <section id="section" >
                <br/><br/><br/><br/>
                <svg width="744px" height="746px" viewBox="0 0 744 746" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="slink_stairs" transform="translate(1.000000, 1.000000)">
                            <g id="Group">
                                <path d="M211.5,108.5 L211.5,214" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M106,0 L106,105.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M318,214 L318,319.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M424,320 L424,425.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M530,426 L530,531.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M636,532 L636,637.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M742,638 L742,743.5" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M317.5,214 L212,214" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M211.5,107 L106,107" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M105.5,0 L0,0" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M423.5,320 L318,320" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M529.5,426 L424,426" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M635.5,532 L530,532" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M741.5,638 L636,638" id="Line-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path>
                                <g id="Logostep" transform="translate(240.000000, 107.000000)" fill="#7ED321">
                                    <g id="Logo">
                                        <rect id="Rectangle-13" x="0" y="100" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" x="0" y="95" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" x="0" y="90" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" x="0" y="85" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(37.000000, 75.500000) rotate(12.000000) translate(-37.000000, -75.500000) " x="1" y="73" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(41.959792, 62.108345) rotate(28.000000) translate(-41.959792, -62.108345) " x="5.95979225" y="59.6083452" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(51.550556, 49.598399) rotate(47.000000) translate(-51.550556, -49.598399) " x="15.5505556" y="47.098399" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(65.055465, 40.184569) rotate(66.000000) translate(-65.055465, -40.184569) " x="29.0554651" y="37.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(81.055465, 36.184569) rotate(85.000000) translate(-81.055465, -36.184569) " x="45.0554651" y="33.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(98.055465, 37.184569) rotate(104.000000) translate(-98.055465, -37.184569) " x="62.0554651" y="34.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(113.055465, 42.184569) rotate(122.000000) translate(-113.055465, -42.184569) " x="77.0554651" y="39.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(126.055465, 53.184569) rotate(142.000000) translate(-126.055465, -53.184569) " x="90.0554651" y="50.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(133.055465, 67.184569) rotate(160.000000) translate(-133.055465, -67.184569) " x="97.0554651" y="64.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(136.055465, 78.184569) rotate(170.000000) translate(-136.055465, -78.184569) " x="100.055465" y="75.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 89.184569) rotate(180.000000) translate(-137.055465, -89.184569) " x="101.055465" y="86.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 94.184569) rotate(180.000000) translate(-137.055465, -94.184569) " x="101.055465" y="91.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 99.184569) rotate(180.000000) translate(-137.055465, -99.184569) " x="101.055465" y="96.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 104.184569) rotate(180.000000) translate(-137.055465, -104.184569) " x="101.055465" y="101.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 109.184569) rotate(180.000000) translate(-137.055465, -109.184569) " x="101.055465" y="106.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 114.184569) rotate(180.000000) translate(-137.055465, -114.184569) " x="101.055465" y="111.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 119.184569) rotate(180.000000) translate(-137.055465, -119.184569) " x="101.055465" y="116.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 124.184569) rotate(180.000000) translate(-137.055465, -124.184569) " x="101.055465" y="121.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 129.184569) rotate(180.000000) translate(-137.055465, -129.184569) " x="101.055465" y="126.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 134.184569) rotate(180.000000) translate(-137.055465, -134.184569) " x="101.055465" y="131.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 139.184569) rotate(180.000000) translate(-137.055465, -139.184569) " x="101.055465" y="136.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 144.184569) rotate(180.000000) translate(-137.055465, -144.184569) " x="101.055465" y="141.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 149.184569) rotate(180.000000) translate(-137.055465, -149.184569) " x="101.055465" y="146.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 154.184569) rotate(180.000000) translate(-137.055465, -154.184569) " x="101.055465" y="151.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 159.184569) rotate(180.000000) translate(-137.055465, -159.184569) " x="101.055465" y="156.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 164.184569) rotate(180.000000) translate(-137.055465, -164.184569) " x="101.055465" y="161.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 169.184569) rotate(180.000000) translate(-137.055465, -169.184569) " x="101.055465" y="166.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 174.184569) rotate(180.000000) translate(-137.055465, -174.184569) " x="101.055465" y="171.684569" width="72" height="5" rx="2"></rect>
                                        <rect id="Rectangle-13" transform="translate(137.055465, 179.184569) rotate(180.000000) translate(-137.055465, -179.184569) " x="101.055465" y="176.684569" width="72" height="5" rx="2"></rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <h1 id="h1">Welcome!</h1>
                <div id="form">
                    <h2 id="logintxt"> Log In </h2>
                    <input id="input1" placeholder="Username" style={error ? errorStyle : {border: "0"}} onKeyUp={(event) =>{ event.keyCode == 13 ? document.getElementById("go").click() : null}}/>
                    <br/>
                    <input type="password" id="input2" placeholder="Password" style={error ? errorStyle : {border: "0"}}/>
                    <br/>
                    <button onClick={() => this.handleGo(document.getElementById('input1').value, document.getElementById('input2').value)} id="go">Go</button>
                </div>
            </section>
        </div>
      ) 
    }
  }
  
  const mapStateToProps = state => {
    return{
      isFetching: state.isFetching,
      loginError: state.loginError,
      currentUser: state.currentUser 
    }
  }
  
  
  
  export default connect(mapStateToProps)(Login);