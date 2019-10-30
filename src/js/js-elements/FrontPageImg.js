import React, { Component } from 'react';
import frontPageImg from '../img/large-images/front-page-property-img-cropped.jpg';

class FrontPageImage extends Component {
    render() {
        return (
            <div>
                <div className="parallax"></div>
                <p className="p1"> Some textvderrvcsd </p>
                <img alt="property" className="front-page-img" src={frontPageImg}></img>
            </div>
          );
        }
    }
export default FrontPageImage;

