import React, { Component } from 'react';
import SearchBar from '../js-elements/SearchBar/'
import AboutSection from '../js-elements/About/ImageCard/'

export default class LocalareaPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-4" ><iframe 
                    width="100%"
                    height="470px"
                    frameborder="" 
                    className="makespace"
                    style={{border:"0"}}
                    src="https://www.google.com/maps/embed/v1/place?q=40%20occam%20road&key=AIzaSyCvDunidRrAltE58TKFJwlOPyK6ZNicZu0" allowfullscreen>
                    </iframe></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6"> 
                                <AboutSection className="makespace2 i01" height="200px" title=""></AboutSection> 
                            </div>
                            <div className="col-md-6">
                                <AboutSection className="makespace2 i01" title="" height="200px"></AboutSection>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"> 
                                <AboutSection className="makespace2 i01" height="200px" title=""></AboutSection> 
                            </div>
                            <div className="col-md-6">
                                <AboutSection className="makespace2 i01" title="" height="200px"></AboutSection>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        ); 
    }
}