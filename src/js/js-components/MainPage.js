/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import NavbarLeft from '../js-elements/Navbar/NavbarLeft';
import NavbarRight from '../js-elements/Navbar/NavbarRight'
import OverlayWidget from '../js-elements/OverlayWidget/';
import Gallery from '../js-elements/Gallery/'
import AboutImage from '../js-elements/About/ImageCard';
import SearchBar from '../js-elements/SearchBar/'
import Reveal from 'react-reveal/Reveal';

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
            <OverlayWidget bottom="50px" leftPos="20px"></OverlayWidget>
            </div>
        );
    }

}