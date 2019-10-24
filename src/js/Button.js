import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {design: "first", inside: "Discover More"}

    }
    render() {
        return <button className={this.props.design}>{this.props.inside}</button>
    }
}

export default Button;