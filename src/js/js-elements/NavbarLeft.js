import React, { Component } from 'react';
import reddit from '../../img/icons2/reddit.png';
import youtube from '../../img/icons2/youtube.png';
import linkedin from '../../img/icons2/linkedin.png';
import instagram from '../../img/icons2/instagram.png';
import facebook from '../../img/icons2/facebook.png';
import logo from '../../img/icons/logo.png'

class NavbarLeft extends Component {
    render() {
        return ( 
            <div className="navbar-left">
            <span className="navbar-left-brand" > <img src={logo} className="App-logo" alt="logo" /></span>
                <a href="#youtube"><img alt="youtube logo" className="" width="50rem" src={youtube}></img></a>
                <a href="#instagram"><img alt="instagram logo" className="" width="50rem" src={instagram}></img></a>
                <a href="#facebook"><img alt="facebook logo" className="" width="50rem" src={facebook}></img></a>
            </div>
          );
        }
    }
export default NavbarLeft;
