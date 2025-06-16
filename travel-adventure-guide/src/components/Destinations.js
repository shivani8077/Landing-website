import React from "react";
import "./Destination.css";
import { Header } from "./Header";
import { Footer } from "./Footers";

export const DestinationPage = () => {
    return (
        <div className="dest-body">
            <Header />
            <br />
            <div className="bubble-container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="bubble"></div>
                ))}
            </div>
            {/* <div className="dest-header">
                <span>
                <img src='assets/logo.png' alt='Travel & Adventure Guide' className='logo' />
                <h1 className="h1">Travel & Adventure</h1>
                </span>
            </div> */}
            <div className="back">
                <a href="/">Back</a>
            </div>
            <div className="section-title">
                <h2 className="title">Destinations Around the World!</h2>
                <p className="intro">
                    From the bustling streets of Tokyo to the serene beaches of the Maldives, explore destinations
                    that spark your wanderlust. Whether you're seeking adventure, relaxation, or cultural immersion,
                    we've got the perfect spot for you.
                </p>
            </div>
            <div className="card">
                <div className="inner-card">
                    <h2>card</h2>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}