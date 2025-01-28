import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footers";
import './HeroArea.css';

export const HeroArea = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* First Section */}
            {/* Background Image */}
            <section className="bg-img slideshow">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
                            <a href="#Destination" className="btn-dest">
                                Start Your Journey
                            </a>
                            <a href="#Destination" className="btn-dest">
                                View Travel Tips
                            </a>
                        </div>
                        {/* Search Bar */}
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search for Destinations, activites or tips...."
                                className="search-input" />
                        </div>
                        <br />
                    </div>
                </div>
            </section >
            {/* About Section */}
            <section className="section2">
                <div className="about-heading">
                    <h1>About Us</h1>
                </div>
                <div className="bg-2">
                    <div className="outerarea">
                        <div className="circle">
                            <p className="About-Description circle-text">
                                We help you discover breathtaking destinations, plan unforgettable trips, and make the most of your adventures. Whether you're a seasoned traveler or a first-time explorer, we've got something for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
            {/* Footer */}
            < Footer />
        </div >
    );
}