import React, { Component } from 'react';
import RTlogo from '../../img/icons/RT-logo.png';

class OverlayWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 50,
            height: 50
        }
        this.changeWidth = this.changeWidth.bind(this)
    }

    changeWidth = (e) => {
        var x = Math.random()*20 + 30;
        this.setState({
            width: x,
            height: x
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.changeWidth, 5000);
    }
    
    render() {
        return (
            <div onClick={this.changeWidth} style={{width: this.state.width, height: this.state.height, right: this.props.rightPos, left:this.props.leftPos, bottom: this.props.bottom, top: this.props.top}} className="overlay-widget"><a href="/"><img className="TR-widget" src={RTlogo}></img></a></div>
         );
    }
}

export default OverlayWidget;