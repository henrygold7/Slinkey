import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, OverlayTrigger} from 'react-bootstrap';
import '../styles/Home.css';
import '../styles/TopNav.css';
import '../styles/LoginNav.css'

class LoginNav extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render() {
        return(
            <Navbar id='Nav'>
                <Navbar.Header >
                    <Navbar.Brand>
                        <a href="/">
                            <span>
                                <svg id="title" width="135px" height="46px" viewBox="0 0 135 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="ShreeDev0714" font-size="36" font-weight="lighter" letter-spacing="-1.3">
                                        <g id="slinkey" transform="translate(-22.000000, -8.000000)">
                                            <text>
                                                <tspan x="54.2320498" y="35" fill="#274504">s</tspan>
                                                <tspan x="72.3031056" y="35" fill="#396705">l</tspan>
                                                <tspan x="79.0176398" y="35" fill="#56960C">i</tspan>
                                                <tspan x="84.7321739" y="35" fill="#5FA512">n</tspan>
                                                <tspan x="104.2616149" y="35" fill="#8ED53D">k</tspan>
                                                <tspan x="121.405963" y="35" fill="#8DCF40">e</tspan>
                                                <tspan x="140.816149" y="35" fill="#B8E986">y</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight style={{right: "0"}}>
                    <a href={this.props.link}><button id="signup">{this.props.button}</button></a>
                </Nav>
            </Navbar>
            
        )
    }
};


export default LoginNav;