import React, { Component } from 'react';
import CallText from '../js-elements/About/CallText';
import ContactForm from '../js-elements/Contact';
import OverlayWidget from '../js-elements/OverlayWidget/';

export default class ContactPage extends Component {
    render() {
        return (
            <div className="contact-page-container">
                <div id="contact-section">
                
                <h1>Send us your message by filling out the form below.
                One of our advisors will be happy to get in touch with you.</h1>
                    
                    <ContactForm className="email-form cm-half"></ContactForm>
                    <CallText className="callText"></CallText>
                    <CallText className="callText"></CallText>
                    <OverlayWidget bottom="50px" leftPos="20px"></OverlayWidget>
                </div>
            </div>
        )
    }
}