import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, OverlayTrigger} from 'react-bootstrap';
import { Provider, connect } from 'react-redux';
import Tooltip from 'react-tooltip'
import '../styles/Home.css';
import '../styles/TopNav.css';
import LinkInput from './LinkInput.js';


const tooltip1 = (
    <Tooltip id="tooltip">save a URL</Tooltip>
  );
 

class TopNav extends Component {
    constructor(){
        super();
    }
    handleAdd = ()=>{
        const url = this.input.getValue();
        this.props.pigeon(url);
    } 
    render() {
        return(
            <Navbar id='Navbar'>
                <Navbar.Header >
                    <Navbar.Brand>
                        <a href="/home">
                            <span>
                            <svg id='logo' width="35px" height="26px" viewBox="0 0 35 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Logo" fill="#7ED321">
                                            <g id="Rectangle-13">
                                                <rect x="0" y="20.4724409" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect x="0" y="19.4488189" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect x="0" y="18.4251969" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect x="0" y="17.4015748" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(7.442529, 15.456693) rotate(12.000000) translate(-7.442529, -15.456693) " x="0.201149425" y="14.9448819" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(8.440188, 12.715094) rotate(28.000000) translate(-8.440188, -12.715094) " x="1.19880879" y="12.2032833" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(10.369365, 10.154003) rotate(47.000000) translate(-10.369365, -10.154003) " x="3.12798532" y="9.64219192" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(13.085869, 8.226762) rotate(66.000000) translate(-13.085869, -8.226762) " x="5.8444901" y="7.71495113" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(16.304260, 7.407865) rotate(85.000000) translate(-16.304260, -7.407865) " x="9.0628809" y="6.89605349" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(19.723800, 7.612589) rotate(104.000000) translate(-19.723800, -7.612589) " x="12.4824211" y="7.1007779" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(22.741042, 8.636211) rotate(122.000000) translate(-22.741042, -8.636211) " x="15.4996625" y="8.12439995" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(25.355984, 10.888179) rotate(142.000000) translate(-25.355984, -10.888179) " x="18.114605" y="10.3763685" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(26.764030, 13.754321) rotate(160.000000) translate(-26.764030, -13.754321) " x="19.522651" y="13.2425102" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.367479, 16.006290) rotate(170.000000) translate(-27.367479, -16.006290) " x="20.1260993" y="15.4944787" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 18.258258) rotate(180.000000) translate(-27.568628, -18.258258) " x="20.3272487" y="17.7464472" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 19.281880) rotate(180.000000) translate(-27.568628, -19.281880) " x="20.3272487" y="18.7700692" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 20.305502) rotate(180.000000) translate(-27.568628, -20.305502) " x="20.3272487" y="19.7936913" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 21.329124) rotate(180.000000) translate(-27.568628, -21.329124) " x="20.3272487" y="20.8173133" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 22.352746) rotate(180.000000) translate(-27.568628, -22.352746) " x="20.3272487" y="21.8409354" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 23.376368) rotate(180.000000) translate(-27.568628, -23.376368) " x="20.3272487" y="22.8645574" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 24.399990) rotate(180.000000) translate(-27.568628, -24.399990) " x="20.3272487" y="23.8881795" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                                <rect transform="translate(27.568628, 25.423613) rotate(180.000000) translate(-27.568628, -25.423613) " x="20.3272487" y="24.9118015" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <svg width="135px" height="46px" viewBox="0 0 135 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="ShreeDev0714" font-size="36" font-weight="lighter" letter-spacing="-1.3">
                                        <g id="slinkey" transform="translate(-22.000000, -8.000000)">
                                            <text>
                                                <tspan x="24.2320498" y="41" fill="#274504">s</tspan>
                                                <tspan x="42.3031056" y="41" fill="#396705">l</tspan>
                                                <tspan x="49.0176398" y="41" fill="#56960C">i</tspan>
                                                <tspan x="54.7321739" y="41" fill="#5FA512">n</tspan>
                                                <tspan x="74.2616149" y="41" fill="#8ED53D">k</tspan>
                                                <tspan x="91.405963" y="41" fill="#8DCF40">e</tspan>
                                                <tspan x="110.816149" y="41" fill="#B8E986">y</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight style={{right: "0"}}>
                        <NavDropdown eventKey={1} title={<a info="New link" id="tooltiptop"><i id='add' className='material-icons'>add</i></a>} id='addDropdown'>
                                <p id='text123'>Paste a URL</p>
                                <LinkInput ref={instance => {this.input = instance}}/>
                                <button id='add_button' onClick={() => this.handleAdd()}>Add</button>
                        </NavDropdown>
                        <NavItem>
                            <OverlayTrigger trigger="hover" placement="bottom" overlay={tooltip1}>
                                <a info="Search" id="tooltiptop"><i id='search' className='material-icons'>search</i></a>
                            </OverlayTrigger>
                        </NavItem>
                        <NavDropdown eventKey={3} title={<span><i className='material-icons'>person</i><span>{this.props.currentUser.firstname}</span></span>} id="basic-nav-dropdown">
                            <li role="presentation">
                                <a href='#'>
                                    <i className='material-icons' id='dropIcon'>settings</i>
                                <span id='span2'>Settings</span>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href='login'>
                                    <i className='material-icons' id='dropIcon'>exit_to_app</i>
                                <span id='span2' >Logout</span>
                                </a>
                            </li>
                        </NavDropdown>
                </Nav>
            </Navbar>


        )
    }
};
const mapStateToProps = state => {
    return{
      isFetching: state.isFetching,
      currentUser: state.currentUser,
      activeFolder: state.activeFolder,
    }
  }

export default connect(mapStateToProps)(TopNav);













{/* <nav className="navbar navbar-expand-lg">
<div className="container">
<a classname="navbar-brand" href="/home">
    <span>
    <svg id='logo' width="35px" height="26px" viewBox="0 0 35 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Logo" fill="#7ED321">
                    <g id="Rectangle-13">
                        <rect x="0" y="20.4724409" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect x="0" y="19.4488189" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect x="0" y="18.4251969" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect x="0" y="17.4015748" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(7.442529, 15.456693) rotate(12.000000) translate(-7.442529, -15.456693) " x="0.201149425" y="14.9448819" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(8.440188, 12.715094) rotate(28.000000) translate(-8.440188, -12.715094) " x="1.19880879" y="12.2032833" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(10.369365, 10.154003) rotate(47.000000) translate(-10.369365, -10.154003) " x="3.12798532" y="9.64219192" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(13.085869, 8.226762) rotate(66.000000) translate(-13.085869, -8.226762) " x="5.8444901" y="7.71495113" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(16.304260, 7.407865) rotate(85.000000) translate(-16.304260, -7.407865) " x="9.0628809" y="6.89605349" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(19.723800, 7.612589) rotate(104.000000) translate(-19.723800, -7.612589) " x="12.4824211" y="7.1007779" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(22.741042, 8.636211) rotate(122.000000) translate(-22.741042, -8.636211) " x="15.4996625" y="8.12439995" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(25.355984, 10.888179) rotate(142.000000) translate(-25.355984, -10.888179) " x="18.114605" y="10.3763685" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(26.764030, 13.754321) rotate(160.000000) translate(-26.764030, -13.754321) " x="19.522651" y="13.2425102" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.367479, 16.006290) rotate(170.000000) translate(-27.367479, -16.006290) " x="20.1260993" y="15.4944787" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 18.258258) rotate(180.000000) translate(-27.568628, -18.258258) " x="20.3272487" y="17.7464472" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 19.281880) rotate(180.000000) translate(-27.568628, -19.281880) " x="20.3272487" y="18.7700692" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 20.305502) rotate(180.000000) translate(-27.568628, -20.305502) " x="20.3272487" y="19.7936913" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 21.329124) rotate(180.000000) translate(-27.568628, -21.329124) " x="20.3272487" y="20.8173133" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 22.352746) rotate(180.000000) translate(-27.568628, -22.352746) " x="20.3272487" y="21.8409354" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 23.376368) rotate(180.000000) translate(-27.568628, -23.376368) " x="20.3272487" y="22.8645574" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 24.399990) rotate(180.000000) translate(-27.568628, -24.399990) " x="20.3272487" y="23.8881795" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                        <rect transform="translate(27.568628, 25.423613) rotate(180.000000) translate(-27.568628, -25.423613) " x="20.3272487" y="24.9118015" width="14.4827586" height="1.02362205" rx="0.511811024"></rect>
                    </g>
                </g>
            </g>
        </svg>
        <svg width="135px" height="46px" viewBox="0 0 135 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="ShreeDev0714" font-size="36" font-weight="lighter" letter-spacing="-1.3">
                <g id="slinkey" transform="translate(-22.000000, -8.000000)">
                    <text>
                        <tspan x="24.2320498" y="41" fill="#274504">s</tspan>
                        <tspan x="42.3031056" y="41" fill="#396705">l</tspan>
                        <tspan x="49.0176398" y="41" fill="#56960C">i</tspan>
                        <tspan x="54.7321739" y="41" fill="#5FA512">n</tspan>
                        <tspan x="74.2616149" y="41" fill="#8ED53D">k</tspan>
                        <tspan x="91.405963" y="41" fill="#8DCF40">e</tspan>
                        <tspan x="110.816149" y="41" fill="#B8E986">y</tspan>
                    </text>
                </g>
            </g>
        </svg>
    </span>
</a>
<button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
</button> 
    <div className={`${classOne}`} id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavDropdown eventKey={1} title={<i id='add' className='material-icons'>add</i>} id='addDropdown'>
                        <p id='text123'>Paste a URL</p>
                        <LinkInput ref={instance => {this.input = instance}}/>
                        <button id='add_button' onClick={() => this.handleAdd()}>Add</button>
                </NavDropdown>
            </li>
            <li className="nav-item">
                <NavItem>
                    <OverlayTrigger trigger="hover" placement="bottom" overlay={tooltip1}>
                    <i id='search' className='material-icons'>search</i>
                    </OverlayTrigger>
                </NavItem>
            </li>
            <li className="nav-item">
                <NavDropdown eventKey={3} title={<span><i className='material-icons'>person</i><span> username</span></span>} id="basic-nav-dropdown">
                    <li role="presentation">
                        <a href='#'>
                            <i className='material-icons' id='dropIcon'>settings</i>
                        <span id='span2'>Settings</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href='login'>
                            <i className='material-icons' id='dropIcon'>exit_to_app</i>
                        <span id='span2' >Logout</span>
                        </a>
                    </li>
                </NavDropdown>
            </li>
        </ul>
    </div>
</div>
</nav> */}