import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header className='fixed bg-white Header'>
            {/* logo */}
            <div className='flex item-center'>
                <img src='assets/logo.png' alt='Travel & Adventure Guide' className='logo' />
                <h1 className='font-bold'>Travel & Adventure</h1>
            </div>
            {/* Navigation */}
            <nav className='hidden md:flex'>
                <a href='#Home'>Home</a>
                <a href='#Destination'>Destinations</a>
                <a href='#Guides'>Tip & Guides</a>
                <a href='#Gear'>Gear</a>
                <a href='Blog'>Blog</a>
                <a href='#Contact'>ContactUs</a>
                {/* Login/Signup */}
                <button>LogIn</button>
                <button>SignUp</button>
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
    );
}