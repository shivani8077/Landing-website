import React from "react";
import "./Destination.css";
import { Header } from "./Header";
import { Footer } from "./Footers";
import Mountain from '../assets/mountain.png';

export const DestinationPage = () => {
    return (
        <div className="dest-body">
            <Header />
            {/* Bubble animatio */}
            {/* <div className="bubble-container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="bubble"></div>
                ))}
            </div> */}
            <div className="back">
                <a href="/">Back</a>
            </div>
            <div className="section-title">
                <h2 className="title">Destinations Around the World!</h2>
                <p className="intro">
                    {/* From the bustling streets of Tokyo to the serene beaches of the Maldives, explore destinations
                    that spark your wanderlust. Whether you're seeking adventure, relaxation, or cultural immersion,
                    we've got the perfect spot for you. */}
                    The world is full of extraordinary places waiting to be explored. Whether you're chasing mountains, 
                    beaches, deserts, or cities, we've got guides to help you uncover hidden gems and popular spots alike. 
                    
                    Start your journey by choosing a destination below.
                </p>
                {/* </div> */}
                {/* Catagories Finding */}
                <div className="card">
                    <div className="inner-card">
                        <div>
                            <h2 className="exp-cate">Explore by Region/Category</h2>
                        </div>
                        <div className="categorycard">
                            <div className="Mountaintrek">
                                <h3 className="h3"><a href="#">Mountains & Treks</a></h3>
                            </div>
                            <div className="Beach">
                                <h3 className="h3"><a href="#">Beaches & Islands</a></h3>
                            </div>
                            <div className="City">
                                <h3 className="h3"><a href="#">City Escapes</a></h3>
                            </div>
                            <div className="N-W">
                                <h3 className="h3"><a href="#">Nature & wildlife</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}