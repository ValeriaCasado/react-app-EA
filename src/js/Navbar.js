import React, { Component } from 'react';
import logo from '../html5.svg';


class Navbar extends Component {
    render() {
        return (
            <ul className="navbar-fp">
                
                <li id="navbar-fp-brand" > <img id="navbar-fp-brand" src={logo} className="App-logo" alt="logo" /></li>
                <div className="navbar-fp-container">
                <li><a href="default.asp">PROPERTIES</a></li>
                <li><a href="news.asp">LEASE</a></li>
                <li><a href="contact.asp">SELL</a></li>
                <li><a href="about.asp">MORTGAGES</a></li>
                <li><a href="about.asp">ABOUT</a></li>
                </div>
            </ul>
        )
      }
}

export default Navbar;