import React from "react";
import './SignUp.css';

export const SignUpPage = () => {
    return (
        <div className="signup-container">
            <div className="signup">
                <form className="form-card">
                    <h3>Sign Up for New User</h3>
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
                    <label> Password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password" />
                    <label> Mobile :</label>
                    <input
                        type="number"
                        placeholder="{0-9} mobile number"
                        name="password" />
                    <span>
                        <label for="checkme">
                            <input
                                type="checkbox"
                                name="check"
                                id="checkme"
                                value="Remember me" />
                            Remember me</label>
                    </span><br/>
                    <div className="btn-center">
                        <button className="signup-btn">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
