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
                <h3 className="cu-int">Got a question, a travel story to share, or a collaboration idea? We’d love to
                    hear from you! Use the form below or reach out to us directly — we’re always
                    happy to connect.
                </h3>
                <div className="con-form">
                    {/* <h3>Contact:</h3> */}
                    <form className="form-card">
                        <h3>Contact:</h3>
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
                        <div className="btn-center">
                            <button type="submit" className="btn send">Send</button>
                        </div>
                    </form> </div>
            </section>
            <br />
            {/* Footer */}
            <Footer />
        </div>
    );
}