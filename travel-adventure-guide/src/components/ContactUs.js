import react from "react";
import "./ContactUs.css";
import { Header } from "./Header";
import { Footer } from "./Footers";

export const ContactUS = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* <br/> */}
            <section className="con-us">
                <div className="back">
                    <a href="/">Back</a>
                </div>
                <br />
                <h2 className="ctitle">Travel & adventure</h2>
                <h3 className="cu-int">
                    Got a question, a travel story to share, or a collaboration idea? We’d love to
                    hear from you! Use the form below or reach out to us directly — we’re always
                    happy to connect.
                </h3>
                <div className="c-main">
                    <div className="con-form">
                        {/* <h3>Contact:</h3> */}
                        <form className="form-card">
                            <h3>Contact Form</h3>
                            <label>Name :</label>
                            <input
                                type="textarea"
                                placeholder="Enter Full Name..."
                                name="username" />
                            <label> Email :</label>
                            <input
                                type="email"
                                placeholder="abc@gmail.com"
                                name="username" />
                            <label> Subject :</label>
                            <input
                                type="textarea"
                                placeholder="subject"
                                name="subject" />
                            <label> Message :</label>
                            <input
                                type="textarea"
                                placeholder="write your suggestion...."
                                name="Message" />
                            <br />
                            <div className="btn-left">
                                <button type="submit" className="btn-send">Send</button>
                            </div>
                            <p>We usually respond within 24–48 hours.</p>
                        </form>
                    </div>
                    <div className="contact-details">
                        <h3> Direct Contact Details:</h3>
                        <h4>📧 Email: contact@traveladventure.com</h4>

                        <h4>📱 Phone: +1 (123) 456-7890</h4>

                        <h4>🏠 Address: 123 Adventure Lane, Wanderlust City, Earth</h4>
                    </div>
                </div>
            </section >
            {/* <br /> */}
            {/* Footer */}
            <Footer />
        </div >
    );
}