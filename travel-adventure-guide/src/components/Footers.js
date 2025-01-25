import React from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Quick Link */}
                <div>
                    <h3>Quick Link</h3>
                    <ul>
                        <a href="#Home">Home</a><br />
                        <a href="#Destination">Destinations</a><br />
                        <a href="#Guides">Tip & Guide</a><br />
                        <a href="#Gear">Gear</a><br />
                        <a href="#Blog">Blog</a><br />
                        <a href="#contact">ContactUs</a>
                    </ul>
                </div>
                {/* Contact Information */}
                <div>
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:contact@traveladventure.com" className="hover:text-blue-400">contact@traveladventure.com</a></p>
                    <p>Phone: <a href="tel:+11234567890" className="hover:text-blue-400">+1 (123) 456-7890</a></p>
                    <p>Address: 123 Adventure Lane, Wanderlust City</p>
                </div>
                {/* Social Media */}
                <div>
                    <h3>Follow Us</h3>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img width="50" height="50" src="https://img.icons8.com/color/50/facebook-new.png" alt="facebook-new" />
                        </a><br />
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img width="50" height="50" src="https://img.icons8.com/color/50/instagram-new--v1.png" alt="instagram-new--v1" />
                        </a><br />
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img width="50" height="50" src="https://img.icons8.com/color/50/twitter--v1.png" alt="twitter--v1" />
                        </a>
                    </div>
                </div>
                {/* Newsletter SignUp */}
                <div>
                    <h3>Subscribe</h3>
                    <p className="mb-2">Get exclusive travel tips and deals straight to your inbox.</p>
                    <form>
                        <input type="email" placeholder="Enter the Email" className="input-block" />
                        <button type="submit" className="btn">Subscribe</button>
                    </form>
                </div>
            </div>
            {/* Copyright & legel */}
            <div>
                <p className="text-sm">
                    © 2025 Travel & Adventure Guide. All rights reserved. |
                    <a href="#privacy" className="hover:text-blue-400 ml-2"> Privacy Policy</a> |
                    <a href="#terms" className="hover:text-blue-400 ml-2"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}