import React, { Component } from 'react';
import OverlayWidget from '../js-elements/OverlayWidget.js';
import AboutSection from '../js-elements/AboutSection.js';
import AboutImage from '../js-elements/AboutImage.js';


export default class AboutPage extends Component {
    render() {
        return(
            <div className="container row">
                <AboutSection className="column cm-two-thirds i02" initialOp="0.7"></AboutSection>
                <AboutImage className="column cm-one-third p01"
                height="700px"
                insideHeight="90%"
                title="Title about estate agents" 
                content="We’re end-to-end real estate advisors and negotiators. 
                        Achieving the best outcome for your situation is our motivation"></AboutImage>
            </div>
        );
    }
}