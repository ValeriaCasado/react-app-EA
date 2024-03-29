/* eslint-disable no-unused-vars */
import React, { Component }  from 'react';

class ImageCard extends Component {
    render() {
        return (
                <div className={`makespace2 ${this.props.className}`} style={{backgroundImage: this.props.background, height: "600px", position: "relative"}} >
                    <div className="about-section"  style={{opacity: this.props.initialOp}}>
                    <h1>Title about estate agents</h1>
                    <p>We’re end-to-end real estate advisors and negotiators. 
                        We tell you how it is. We are not brash, we’re matter of fact.
                        Why? Because we work for you, not the market.
                        Achieving the best outcome for your situation is our motivation</p>
                        <p>We’re end-to-end real estate advisors and negotiators. 
                    We tell you how it is. We are not brash, we’re matter of fact.
                    Why? Because we work for you, not the market.
                    Achieving the best outcome for your situation is our motivation</p>
                    </div>
                    <div className="signature makespace2" style={{bottom: "0", position: "absolute", opacity: this.props.initialOp, left: "0", backgroundColor: "#F3F3F1"}}>- Property name GU2 8DJ, something</div>

                </div>
            );
    }
}

export default ImageCard;