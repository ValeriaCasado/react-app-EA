import React, { Component } from 'react';
import logo from '../img/icons/logo.png';
import menu from '../img/icons/menu.svg'


class Navbar extends Component {
    render() {
        return (
            <ul className="navbar-fp">
                <div className="navbar-fp-container">
                <li><a href="default.asp">BUY</a></li>
                <li><a href="news.asp">LETTINGS</a></li>
                <li><a href="contact.asp">LOCAL AREA</a></li>
                <li><a href="about.asp">MORTGAGES</a></li>
                <li><a href="about.asp">ABOUT</a></li>
                </div>
                
            </ul>
        )
      }
}

export default Navbar;