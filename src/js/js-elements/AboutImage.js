import React, { Component } from 'react';
import '../js-elements/Button.js'
import Button from '../js-elements/Button.js';

class AboutImage extends Component {
    render() {
        return (
                <div className={`underlay-image-section ${ this.props.className }`} style={{height: this.props.height}}>
                    <div className="overlay-image-section" style={{height: this.props.insideHeight}}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                        <Button design="first" inside="Learn more"></Button>
                    </div>
                </div>
            );
    }
}

export default AboutImage;