
import React, { Component } from 'react';
import Button from './Button';

class FrontPageImage extends Component {
    render() {
        return (
            <div class="container">
            <div class="parallax"></div>
		    <div class="overlay">
			<h1>This is the content that will appear on top of the background image.</h1>
			<p>Isn't it neat?</p>
            <Button design="first" inside="MORE"></Button>
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
