import React, { Component } from 'react';
import logo from '../../../../img/icons/rebeccaSimple.png';

const fixedpos = {
    position: 'absolute',
    top: '-10px',
    right: '90px',
    zIndex: '1',
    width: '9rem'
}

export default class OverlayLogo extends Component {
    render() {
        return (
           <img style={fixedpos} src={logo}></img>
        ); 
    }
}