import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footers";
import './HeroArea.css';
import image from "../assets/image.png";

export const HeroArea = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* First Section */}
            {/* Background Image */}
            <br/>
            <section className="bg-img slideshow">
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    {/* Content */}
                    <div className="container content">
                        {/* Headline */}
                        <h1 className="text-headline">
                            Explore the world, One Adventure at a time!
                        </h1>
                        {/* Subheadline */}
                        <div className="sub-content">
                            <p className="sub-head-p">
                                Discover unique Destinations, Travel Tips, & Gear Recommendations to plan your perfect Trip.
                            </p>
                            {/* CTA Button */}
                            <div className="btn-main-section">
                                <a href="/Destination" className="btn-dest">
                                    Start Your Journey
                                </a>
                                <a href="#Destination" className="btn-dest">
                                    View Travel Tips
                                </a>
                            </div>
                            <br />
                            {/* Search Bar */}
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search for Destinations, activites or tips...."
                                    className="search-input" />
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section >
            
            {/* About Section */}
            <section className="section2 bg">
                <div className="bg-white text-gray-800 py-16">
                    <div className="bgshape">
                        {/* Section Title */}
                        <h1 className="about-heading">
                            About Us
                        </h1>

                        {/* Description */}
                        <p className="about-description">
                            Welcome to Travel & Adventure Guide, where we believe that every journey should
                            be as exciting as the destination. Whether you're an adrenaline junkie, a culture
                            seeker, or someone who just loves to explore, we provide the best tips, guides,
                            and resources to make your travel dreams a reality. From hidden gems to iconic
                            landmarks, let us help you discover the world in a whole new way!
                        </p>
                        {/* Call-To-Action */}
                        <div className="btnabout">
                            <a href="#about" className="btn-dest">
                                Discover More
                            </a>
                        </div>
                        <div className="imagearea">
                            <div className="colarea">
                                <img src={image} alt="image" className="image" />
                                <h2>Shivani Singh Prajapati</h2>
                                <p>uttarakhand travel</p>
                            </div>
                            <div className="colarea">
                                <img src={image} alt="image" className="image" />
                                <h2>Aman Singh</h2>
                                <p>uttarakhand travel</p>
                            </div>
                            <div className="colarea">
                                <img src={image} alt="image" className="image" />
                                <h2>Aman Singh</h2>
                                <p>uttarakhand travel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Footer */}
            < Footer />
        </div >
    );
}