/* eslint-disable no-unused-vars */

import React, { Component } from 'react';

class CallText extends Component {
    render() {
        return (
            <div className={this.props.className}>
            <h1> Call us! </h1>
            <p>We look forward to your call and will be pleased to assist you. We are available for you 24 hours, 7 days a week.</p>
            <p id="number">Phone: +49 711 400 40990 </p>
            <p>Charges vary depending on your service provider and country.</p>
            </div>
        );
    }
}
export default CallText;