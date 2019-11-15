import React, { Component } from 'react';
import OverlayWidget from '../js-elements/Overlay/OverlayWidget/';
import SectionCard from '../js-elements/About/SectionCard';
import ImageCard from '../js-elements/About/ImageCard';
import SearchBar from '../js-elements/SearchBar/'


export default class AboutPage extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8"><SectionCard className="col i02" initialOp="0.7"></SectionCard></div>
                    <div className="col-6 col-md-4">
                        <ImageCard className=" p01"
                        height="700px"
                        width="100%"
                        insideHeight="90%"
                        title="Title about estate agents" 
                        content="We’re end-to-end real estate advisors and negotiators. 
                                Achieving the best outcome for your situation is our motivation"></ImageCard>
                <OverlayWidget bottom="50px" leftPos="20px"></OverlayWidget>
                </div>
                </div>
            </div>
        );
    }
}