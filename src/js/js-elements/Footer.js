import React, { Component } from 'react';

const footerStyle = {
    height: "280px",
    backgroundColor: "#F3F3F1",
    left: "0",
    bottom: "0",
    padding: "0.5rem",
    position: "relative",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    width: "90%"
};

const footerElement = {
    borderStyle: 'solid',
    borderWidth: '0px 2px 0px 0px',
    borderColor: '#92959A',
    float: "left"
};

const footerMap = {
    marginLeft: "2rem !important",
    marginRight: "1rem",
    float: "right"
}

export default class Footer extends Component {
    render() {
        return(
            <div style={{backgroundColor: "#F3F3F1"}}>
            <footer style={footerStyle}>
                <div style={footerElement} className="cm-one-third">
                    <h1 style={{margin: "0 !important"}}>Taylor and co</h1>
                    <p>40 Occam Road</p>
                    <p>Guildford</p>
                    <p>Surrey</p>
                    <p>GU2 7YG</p>
                </div>
                <div className="cm-two-thirds">
                    <div className="row">
                    <div className="column cm-half">
                        <p className="important">- +44 (0)203 6952848 </p>
                        <p className="important">- enquiries@email.com</p>
                        <p> </p>
                    </div>
                    <div className="column cm-half" style={footerMap}>
                        <p>
                        <iframe 
                        width="300" 
                        height="200" 
                        frameborder="" 
                        style={{border:"0"}}
                        src="https://www.google.com/maps/embed/v1/place?q=40%20occam%20road&key=AIzaSyCvDunidRrAltE58TKFJwlOPyK6ZNicZu0" allowfullscreen>
                        </iframe>
                        </p>
                    </div>
                    </div>
                </div>
                
            </footer>
            </div>
        );
    }
}
