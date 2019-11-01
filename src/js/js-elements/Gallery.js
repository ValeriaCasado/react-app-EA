import React, { Component } from 'react';

class Gallery extends Component {


    render() {
        return(
            <div className="gallery">
                <div style={{backgroundColor: "black", width: "38%", height: "100px"}} className="gallery-item ">
                <div className="gallery-text"> Hello </div>
                </div>
                <div style={{backgroundColor: "black", width: "40.1%", height: "200px"}} className="i03 gallery-item">

                </div>
                
                <div style={{backgroundColor: "black", width: "38%", height: "400px", marginTop: "-100px"}} className="i02 gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20%", height: "300px", marginTop: ""}} className="gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20%", height: "300px", marginTop: ""}} className="i01 gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20%", height: "500px", marginTop: "-200px"}} className="gallery-item">
                    
                </div>


            </div>
        )
    }
}

export default Gallery;