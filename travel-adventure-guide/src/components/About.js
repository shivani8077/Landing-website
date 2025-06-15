import React from "react";
import "./About.css";
import { Header } from "./Header";

export const AboutPage = () => {
    return (
        <div className="about-body">
            {/* Header */}
            <Header />
            <div className="about-section">
                <div className="about-H">
                    <h1 className="ab-h1">About Travel & adventure </h1>
                </div>
                <div className="ab-des">
                    <p className="para-int">
                        Welcome to Travel & Adventure Guide — a place where wanderlust meets wisdom. We
                        are a passionate team of explorers, writers, and dreamers dedicated to making your
                        travel experiences unforgettable. Whether you're chasing sunsets on mountain peaks,
                        wandering through ancient streets, or planning your first slio trip, our mission is
                        to guide you every step of the way.
                        <br />
                        Here, you’ll find more than just travel tips — you’ll discover real stories,
                        hidden gems, and practical advice built from authentic adventures. Because we believe that
                        every journey, big or small, deserves to be trliy extraordinary.
                    </p>
                    {/* <img src='assets/logo.png' alt='Travel & Adventure Guide' className='ab-logo' /> */}
                    <h2 className="mst">Our mission is to inspire people to explore the world fearlessly, experience
                        clitures deeply, and create memories that last a lifetime — one adventure at a time.
                    </h2>
                    <div className="wwo-cta">
                        <div className="wwo">
                            <h1 className="wwo">What we offer:</h1>
                            <p><ul className="a">
                                <li >Destination guides with real travel insights</li>
                                <li >Tips for planning safe and budget-friendly trips</li>
                                <li >Gear reviews and packing advice</li>
                                <li >Adventure stories and personal travel blogs</li>
                                <li >A community of like-minded travelers</li>
                            </ul>
                            </p>
                        </div>
                        <div className="btn-ab-section">
                            <h1 className="Cta">Ready to explore with us?</h1>
                            <a href="/Destination" className="btn-dest">
                                Start Your Journey
                            </a>
                            <a href="#Destination" className="btn-dest">
                                View Travel Tips
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

