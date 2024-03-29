/* eslint-disable no-unused-vars */
import React, { Component }  from 'react';
import Button from '../../Button';

const underlayImageSection = {
    padding: '2rem',
    margin: '2rem',
    height: '700px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }



class ImageCard extends Component {
    render() {
        return (
                <div className={`underlay-image-section ${ this.props.className }`} style={{height: this.props.height, width: this.props.width}}>
                    <div className="overlay-image-section" style={{height: this.props.insideHeight}}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                        <Button design="first" inside="Learn more"></Button>
                    </div>
                </div>
            );
    }
}

export default ImageCard;