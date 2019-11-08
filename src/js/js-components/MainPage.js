import React, { Component } from 'react';
import NavbarLeft from '../js-elements/NavbarLeft.js';
import NavbarRight from '../js-elements/NavbarRight.js'
import OverlayWidget from '../js-elements/OverlayWidget.js';
import Gallery from '../js-elements/Gallery.js'

export default class MainPage extends Component {

    render() {
        return (
            <div className="container-mainpage">
            <NavbarLeft side="left" left="0"></NavbarLeft>
            <NavbarRight></NavbarRight>
            <Gallery></Gallery>
            <OverlayWidget leftPos="20px" bottom="50px"></OverlayWidget>
            </div>
        );
    }

}