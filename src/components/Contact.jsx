import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <h2>Contact Information</h2>
                <p>Phone: 123-456-7889</p>
                <p>Email: making@example.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">It's a work in progress</a></p>
            </section>
        );
    }
}

export default Contact;
