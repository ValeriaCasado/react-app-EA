import React, { Component } from 'react';
import NavbarLeft from '../js-elements/NavbarLeft.js';
import NavbarRight from '../js-elements/NavbarRight.js'
import OverlayWidget from '../js-elements/OverlayWidget.js';
import Gallery from '../js-elements/Gallery.js'

export default class MainPage extends Component {

    render() {
        return (
            <div>
            <NavbarLeft side="left" left="0"></NavbarLeft>
            <NavbarRight></NavbarRight>
            <Gallery></Gallery>
            <OverlayWidget leftPos="90%"></OverlayWidget>
            </div>
        );
    }

}