import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out via email or fill out the form below.</p>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
