import React from "react";
import './Login.css';

export const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="LHmain">                
            <h1>Welcome to Website</h1>
            </div>
            <div className="login">
                <form className="form-card">
                    <h3>Login</h3>
                    <label>Username :</label>
                    <input
                        type="textarea"
                        placeholder="Enter the Username..."
                        name="username" />
                    <label>Password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password" />
                    <span>
                        <label for="checkme">
                            <input
                                type="checkbox"
                                name="check"
                                id="checkme"
                                value="Remember me" />
                            Remember me</label>
                        <a href="/forget" className="fpwd">Forget Password?</a><br />
                        <a href="/forget" className="fpwd">New User</a><br />
                        <div className="btn-center">
                            <button className="login-btn">Login</button>
                        </div>
                    </span>
                </form>
            </div>
        </div>
    );
}
