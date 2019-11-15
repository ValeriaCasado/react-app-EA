/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import NavbarLeft from '../js-elements/Navbar/NavbarLeft';
import NavbarRight from '../js-elements/Navbar/NavbarRight'
import OverlayWidget from '../js-elements/Overlay/OverlayWidget/';
import OverlayLogo from '../js-elements/Overlay/OverlayLogo/';
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
            <OverlayLogo></OverlayLogo>
            <Reveal>
            <Gallery></Gallery>
            </Reveal>
            <Reveal><SearchBar></SearchBar></Reveal>
            <div className="container">
            <Reveal>
            <div className="row">
                <AboutImage className="col-6 o01" 
                width="38rem"
                height="200px"
                insideHeight="130px"
                ></AboutImage>
                <AboutImage className="col-6 i01"
                width="38rem"
                 height="200px"
                 insideHeight="130px"
                 ></AboutImage>
            </div>
            </Reveal>
            <Reveal>
            <div className="row">
                <AboutImage className="col-6 i02" 
                width="38rem"
                height="200px"
                insideHeight="130px"
                ></AboutImage>
                <AboutImage className="col-6 p02"
                width="38rem"
                height="200px"
                insideHeight="130px"
                 ></AboutImage>
            </div>
            </Reveal>
            </div>
            <OverlayWidget bottom="50px" leftPos="20px"></OverlayWidget>
            </div>
        );
    }

}