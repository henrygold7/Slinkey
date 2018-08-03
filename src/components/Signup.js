import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetching,
  receiveUser,
  loginError,
  requestUser,
  validateUser,
  postUser,
} from '../actions.js'
import Home from './Home.js';
import '../styles/Login.css';
import '../styles/Signup.css';
import LoginNav from './LoginNav.js'

class Signup extends Component {
    constructor() {
      super();
      this.state = {
          error: false
      }
    }
    handleClick(name, username, password, cpassword){
        if (password !== cpassword){
            this.setState({error: true})
            return;
        }
        this.props.dispatch(postUser(name, username, password))
    }
    render() {
      const passError = this.state.error;
      const userError = this.props.signupError;
      const errorStyle = {
          borderWidth: "2px", 
          borderColor: "red"
      }
      const img = '../8.png';
      return(
        this.props.currentUser.username ? <Redirect to='/home' /> :
        <div className="Login">
            <LoginNav button="Log In" link="/login"/>
            <section id="mysection">
                <svg id="logomid" width="190px" height="141px" viewBox="0 0 190 141" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Wire-Frame2" transform="translate(-427.000000, -106.000000)" fill="#7ED321">
                            <g id="Logo" transform="translate(427.000000, 105.000000)">
                                <g id="Rectangle-13">
                                    <rect x="0" y="111.811024" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect x="0" y="106.220472" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect x="0" y="100.629921" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect x="0" y="95.0393701" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(40.614943, 84.417323) rotate(12.000000) translate(-40.614943, -84.417323) " x="1.09770115" y="81.6220472" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(46.059312, 69.443977) rotate(28.000000) translate(-46.059312, -69.443977) " x="6.5420708" y="66.648701" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(56.587104, 55.456478) rotate(47.000000) translate(-56.587104, -55.456478) " x="17.0698627" y="52.661202" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(71.411459, 44.930778) rotate(66.000000) translate(-71.411459, -44.930778) " x="31.8942174" y="42.1355023" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(88.974677, 40.458337) rotate(85.000000) translate(-88.974677, -40.458337) " x="49.4574358" y="37.6630614" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(107.635597, 41.576447) rotate(104.000000) translate(-107.635597, -41.576447) " x="68.1183553" y="38.7811716" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(124.101114, 47.166998) rotate(122.000000) translate(-124.101114, -47.166998) " x="84.5838726" y="44.3717228" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(138.371229, 59.466211) rotate(142.000000) translate(-138.371229, -59.466211) " x="98.8539875" y="56.6709354" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(146.055137, 75.119754) rotate(160.000000) translate(-146.055137, -75.119754) " x="106.537896" y="72.3244787" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(149.348240, 87.418967) rotate(170.000000) translate(-149.348240, -87.418967) " x="109.830999" y="84.6236913" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 99.718179) rotate(180.000000) translate(-150.445942, -99.718179) " x="110.9287" y="96.9229039" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 105.308731) rotate(180.000000) translate(-150.445942, -105.308731) " x="110.9287" y="102.513455" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 110.899282) rotate(180.000000) translate(-150.445942, -110.899282) " x="110.9287" y="108.104006" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 116.489833) rotate(180.000000) translate(-150.445942, -116.489833) " x="110.9287" y="113.694557" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 122.080384) rotate(180.000000) translate(-150.445942, -122.080384) " x="110.9287" y="119.285109" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 127.670935) rotate(180.000000) translate(-150.445942, -127.670935) " x="110.9287" y="124.87566" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 133.261487) rotate(180.000000) translate(-150.445942, -133.261487) " x="110.9287" y="130.466211" width="79.0344828" height="5.59055118" rx="2"></rect>
                                    <rect transform="translate(150.445942, 138.852038) rotate(180.000000) translate(-150.445942, -138.852038) " x="110.9287" y="136.056762" width="79.0344828" height="5.59055118" rx="2"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <br/>
                <h3>Web content organized by you, <br/> for you.</h3><br/>
                <h4> Sign Up </h4>
                <div id="myform">
                    <input id="input11" class="inputs" placeholder="First Name" style={{border: "0"}}/>
                    <br/>
                    <input id="input22" class="inputs" placeholder="Username" style={userError ? errorStyle : {border: "0"}}/>
                    <br/>
                    <input type="password" id="input3" class="inputs" placeholder="Password" style={{border: "0"}}/>
                    <br/>
                    <input type="password" id="input4" class="inputs" placeholder="Confirm password" style={passError ? errorStyle : {border: "0"}}/>
                    <br/>
                    <button onClick={() => {this.handleClick(document.getElementById('input11').value,document.getElementById('input22').value,document.getElementById('input3').value,document.getElementById('input4').value)}} id="gobutton">Go</button>
                </div>
            </section> 
        </div>
      ) 
    }
  }
  
  const mapStateToProps = state => {
    return{
      isFetching: state.isFetching,
      signupError: state.signupError,
      currentUser: state.currentUser
    }
  }
  
    
  
  export default connect(mapStateToProps)(Signup);