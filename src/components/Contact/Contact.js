import React from "react";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./contact.css"

const Contact = () => {
    return (
        <section className="container">
            <header className="header">
                <p style={{ fontSize: "60px" }}>Contact Us</p>
                <p>Get In Touch With Us</p>
            </header>
            <section className="contact-container">
                <article className="right">
                    <h1>Follow Us</h1>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer noopener">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                            <FaInstagram />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer noopener">
                            <FaPhone />
                        </a>
                    </div>
                </article>
                <article className="right-main">
                    {/* <h1 style={{ marginBottom: "25px" }}>Contact Us</h1> */}
                    <form>
                        <article className="form">
                            <label htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" name="fullName" placeholder="Enter Your Full Name" />
                        </article>
                        <article className="form">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Enter Your Email Address" />
                        </article>
                        <article className="form">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" type="tel" name="phone" placeholder="Enter Your Phone Number" />
                        </article>
                        <article className="form">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" type="text" placeholder="Write Your Message"></textarea>
                        </article>
                        <article>
                            <button className="done" type="submit">Send Message</button>
                        </article>
                    </form>
                </article>
            </section>
        </section>
    );
};

export default Contact;
