import React, { Component } from 'react';
import NavbarLeft from '../js-elements/NavbarLeft.js';
import Parallax from '../js-elements/Parallax.js';

export default class MainPage extends Component {

    render() {
        return (
            <div>
            <NavbarLeft></NavbarLeft>
            <Parallax></Parallax>
            </div>
        );
    }

}