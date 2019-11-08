import React, { Component } from 'react';
import '../js-elements/Button.js'
import Button from '../js-elements/Button.js';

class AboutImage extends Component {
    render() {
        return (
                <div className={`p01 underlay-image-section ${ this.props.className }`} >
                    <div className="overlay-image-section">
                        <h1>Title about estate agents</h1>
                        <p>We’re end-to-end real estate advisors and negotiators. 
                        We tell you how it is. We are not brash, we’re matter of fact.
                        Why? Because we work for you, not the market.
                        Achieving the best outcome for your situation is our motivation</p>
                        <Button design="first" inside="Learn more"></Button>
                    </div>
                </div>
            );
    }
}

export default AboutImage;