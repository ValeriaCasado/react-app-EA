
import React, { Component } from 'react';
import Button from './Button';

class FrontPageImage extends Component {
    render() {
        return (
            <div class="container-mainpage">
            <div class="parallax"></div>
		    <div class="overlay">
			<h1>Main Title Saying Something</h1>
			<p>Paragraph</p>
            <Button design="first" inside="Learn more"></Button>
            <Button design="second" inside="Learn more"></Button>
            <Button design="third" inside="Learn more"></Button>
			<div className="container">
			<div className="c one"></div>
			<div className="c two"></div>
			<div className="c three"></div>
			<div className="c four"></div>
			<div className="c five"></div> </div>
		    </div>
		    <div class="parallax"></div>
		    <div class="overlay">
			<h1>This is the content that will appear on top of the background image.</h1>
			<p>Isn't it neat?</p>
		    </div>
		    <div class="parallax"></div>
            </div>
          );
        }
    }
export default FrontPageImage;
