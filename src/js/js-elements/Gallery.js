import React, { Component } from 'react';

class Gallery extends Component {


    render() {
        return(
            <div className="container">
            <div className="gallery">
                <div style={{backgroundColor: "black", width: "38%", height: "100px"}} className="gallery-item ">
                <div className="gallery-text"><i> " Testimonial one, some text in it, loren impsun et tempus in furias ignemque ruunt: amor omnibus idem. " </i><p className="signature">- Greek person</p></div>
                </div>
                <div style={{backgroundColor: "black", width: "40.1%", height: "200px"}} className="o03 gallery-item"> 

                </div>
                
                <div style={{backgroundColor: "black", width: "38%", height: "400px", marginTop: "-100px"}} className="o02 gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20%", height: "300px", marginTop: ""}} className="gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20%", height: "300px", marginTop: ""}} className="o01 gallery-item">

                </div>
                <div style={{backgroundColor: "black", width: "20.88%", height: "500px", marginTop: "-200px"}} className="i02 gallery-item">
                    
                </div>
                </div>

            </div>
        )
    }
}

export default Gallery;