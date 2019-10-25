import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App.js';
import Navbar from './js/Navbar.js';
import NavbarLeft from './js/NavbarLeft.js';
import OverlayWidget from './js/OverlayWidget.js';
import MyComponent from './js/Parallax.js'
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<OverlayWidget/>, document.getElementById('overlay-widget'));
ReactDOM.render(<NavbarLeft/>, document.getElementById('navbarleft'));
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
ReactDOM.render(<MyComponent/>, document.getElementById('front-page-image'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();