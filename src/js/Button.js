import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {design: "first", inside: "Discover More"}
        this.count = 1; 
    }
    render() {
        return <button className={this.props.design}>{this.props.inside}</button>
        
      } 
}

export default Button;