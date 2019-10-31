import React, { Component } from 'react';
import NavbarLeft from '../js-elements/NavbarLeft.js';
import Parallax from '../js-elements/Parallax.js';
import OverlayWidget from '../js-elements/OverlayWidget.js';

export default class MainPage extends Component {

    render() {
        return (
            <div>
            <NavbarLeft></NavbarLeft>
            <Parallax></Parallax>
            <OverlayWidget leftPos="90%"></OverlayWidget>
            </div>
        );
    }

}