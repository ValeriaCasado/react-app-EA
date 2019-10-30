import React, { Component } from 'react';
import CallText from '../js-elements/CallText.js';


export default class ContactPage extends Component {
    render() {
        return (
            <div className="contact-page-container">
                <div id="contact-section"></div>
                <h1>Send us your message by filling out the form below.
                One of our advisors will be happy to get in touch with you.</h1>
                <form className="email-form cm-half" action="/action_page.php">
                    <input type="text" name="firstname" placeholder="First Name"></input>
                    <input type="text" name="lastname" placeholder="Last Name"></input>
                    <input type="text" name="lastname" placeholder="Subject"></input>
                    <textarea type="textarea" name="body" rows="8" placeholder="Content"></textarea>
                    <a type="submit" value="Submit">Submit</a>
                </form> 
                    <CallText className="callText"></CallText>
            </div>
        )
    }
}