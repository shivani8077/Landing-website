import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header className='bg-white Header'>
                {/* logo */}
                <div className='web-name'>
                    <span> <img src='assets/logo.png' alt='Travel & Adventure Guide' className='logo' />
                        <h1 className='font-bold'>Travel & Adventure</h1>
                    </span>
                </div>
                {/* Navigation */}
                <nav className='hidden md:flex'>
                    <a href='/'>Home</a>
                    <a href='/Destination'>Destinations</a>
                    <a href='/Guides'>Tip & Guides</a>
                    <a href='/Blog'>Blog</a>
                    <a href='/About'>About</a>
                    <a href='/ContactUs'>ContactUs</a>
                    {/* Login/Signup */}
                    <a href='/login' className='button'>Login</a>
                    <a href='/signup' className='button'>SignUp</a>
                </nav>
                {/* CTA Button */}
                {/* <a href="#plan"
                className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">
                Plan Your Trip
            </a> */}
                {/* Mobile Hamburger Menu */}
                {/* <div className="md:hidden">
                <button className="text-gray-800 focus:outline-none">
                    <svg width="8px" height="8px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div> */}
            </header>
        </div>
    );
}