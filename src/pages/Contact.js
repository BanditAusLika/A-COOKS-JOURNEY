import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFeedback('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFeedback('Failed to send message.');
            }
        } catch (error) {
            setFeedback('Error sending message. Please try again later.');
        }
    };

    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            {feedback && <p className="feedback">{feedback}</p>}
            <div className="instagram-link">
                <FaInstagram size={30} />
                <a href="https://instagram.com/a_cooks_journey?igsh=eHk5c2hmcXZ5NDUx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    Visit our Instagram
                </a>
            </div>
        </div>
    );
};

export default Contact;
