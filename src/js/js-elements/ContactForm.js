import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
                <form className={this.props.className} action="/action_page.php" method="POST" autocomplete="on">
                    <input type="text" name="name" placeholder="First Name"></input>
                    <input type="text" name="name" placeholder="Last Name"></input>
                    <input type="text" name="email" placeholder="Subject"></input>
                    <textarea type="textarea" name="body" rows="8" placeholder="Content"></textarea>
                    <a type="submit" value="Submit">Submit</a>
                </form>
            );
    }
}

export default ContactForm;