import React from "react";
import "./About.css";
import { Header } from "./Header";
import image from "../assets/image.png";
import { Footer } from "./Footers";

export const AboutPage = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            <section className="ab-section">
                <div className="back">
                    <a href="/">Back</a>
                </div>
                <br/>
                <h1 className="ab-h1">About Travel & adventure </h1>
                {/* About travel & adventure detail */}
                <div className="ab-des">
                    {/* Our Introduction */}
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
                    {/* Our Mission */}
                    <h2 className="mst">Our mission is to inspire people to explore the world fearlessly, experience
                        clitures deeply, and create memories that last a lifetime — one adventure at a time.
                    </h2>
                    <div className="wwo-cta">
                        {/* What we offer */}
                        <div className="wwo">
                            <h2 className="wwo">What we offer:</h2>
                            <p><ul className="a">
                                <li >Destination guides with real travel insights</li>
                                <li >Tips for planning safe and budget-friendly trips</li>
                                <li >Gear reviews and packing advice</li>
                                <li >Adventure stories and personal travel blogs</li>
                                <li >A community of like-minded travelers</li>
                            </ul>
                            </p>
                        </div>
                        {/* Call to Action */}
                        <div >
                            <h2 className="Cta">Ready to explore with us?</h2>
                            <div className="btn-ab-section">
                                <a href="/Destination" className="btn-dest">
                                    Start Your Journey
                                </a>
                                <a href="#Destination" className="btn-dest">
                                    View Travel Tips
                                </a>
                            </div>
                            <br />
                            {/* Newsletter SignUp */}
                            <p className="mb-2-ab">Get exclusive travel tips and deals straight to your inbox.</p>
                            <form>
                                <input type="email" placeholder="Enter the Email" className="input-block" />
                                <button type="submit" className="btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    {/* Team details */}
                    <div className="teamdetail">
                        <div className="imagearea">
                            <div className="colarea">
                                <img src={image} alt="image" className="image" />
                                <h2>Shivani Singh Prajapati</h2>
                                <p>Explorer & Content Creator</p>
                            </div>
                            <div className="colarea">
                                <img src={image} alt="image" className="image" />
                                <h2>Aman Singh</h2>
                                <p>Trekker & Adventure Blogger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* Footer */}
            <Footer />
        </div>

    );
}

