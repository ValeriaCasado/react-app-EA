import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// //ReactDOM.render(<OverlayWidget/>, document.getElementById('overlay-widget'));
// ReactDOM.render(<NavbarLeft/>, document.getElementById('navbarleft'));
// ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
// ReactDOM.render(<MyComponent/>, document.getElementById('front-page-image'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();