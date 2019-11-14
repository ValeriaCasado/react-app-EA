import React, { Component } from 'react';
import OverlayWidget from '../js-elements/OverlayWidget/';
import SectionCard from '../js-elements/About/SectionCard';
import ImageCard from '../js-elements/About/ImageCard';
import SearchBar from '../js-elements/SearchBar/'


export default class AboutPage extends Component {
    render() {
        return(
            <div className="container row">
                <SectionCard className="column cm-two-thirds i02" initialOp="0.7"></SectionCard>
                <ImageCard className="column cm-one-third p01"
                height="700px"
                insideHeight="90%"
                title="Title about estate agents" 
                content="We’re end-to-end real estate advisors and negotiators. 
                        Achieving the best outcome for your situation is our motivation"></ImageCard>
                <OverlayWidget bottom="50px" leftPos="20px"></OverlayWidget>
            </div>
        );
    }
}