import React, { Component } from 'react';
import NavbarLeft from '../js-elements/NavbarLeft.js';
import NavbarRight from '../js-elements/NavbarRight.js'
import OverlayWidget from '../js-elements/OverlayWidget.js';
import Gallery from '../js-elements/Gallery.js'
import AboutImage from '../js-elements/AboutImage.js';
import Reveal from 'react-reveal/Reveal';
import SearchBar from '../js-elements/SearchBar.js'

export default class MainPage extends Component {

    render() {
        return (
            <div className="container-mainpage">
            <NavbarLeft side="left" left="0"></NavbarLeft>
            <NavbarRight></NavbarRight>
            <Reveal>
            <Gallery></Gallery>
            </Reveal>
            <SearchBar></SearchBar>
            <Reveal>
            <div className="row">
                <AboutImage className="column makespace cm-half o01" 
                height="200px"
                insideHeight="130px"
                ></AboutImage>
                <AboutImage className="column makespace cm-half i01"
                 height="200px"
                 insideHeight="130px"
                 ></AboutImage>
            </div>
            </Reveal>
            <Reveal>
            <div className="row">
                <AboutImage className="column makespace cm-half i02" 
                height="200px"
                insideHeight="130px"
                ></AboutImage>
                <AboutImage className="column makespace cm-half p02"
                 height="200px"
                 insideHeight="130px"
                 ></AboutImage>
            </div>
            </Reveal>

            <OverlayWidget leftPos="20px" bottom="50px"></OverlayWidget>
            </div>
        );
    }

}