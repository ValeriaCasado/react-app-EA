import React, { Component } from 'react';
import reddit from '../../img/icons2/reddit.svg';
import youtube from '../../img/icons2/youtube.svg';
import linkedin from '../../img/icons2/linkedin.svg';
import twitter from '../../img/icons2/twitter.svg';
import instagram from '../../img/icons2/instagram.svg';

class NavbarLeft extends Component {
    render() {
        return ( 
            <div className="navbar-left">
                <a href="#about"><img alt="reddit logo" className="" width="50rem" src={reddit}></img></a>
                <a href="#services"><img alt="youtube logo" className="" width="50rem" src={youtube}></img></a>
                <a href="#clients"><img alt="linked in logo" className="" width="50rem" src={linkedin}></img></a>
                <a href="#clients"><img alt="twitter logo" className="" width="50rem" src={twitter}></img></a>
                <a href="#clients"><img alt="instagram logo" className="" width="50rem" src={instagram}></img></a>
            </div>
          );
        }
    }
export default NavbarLeft;
