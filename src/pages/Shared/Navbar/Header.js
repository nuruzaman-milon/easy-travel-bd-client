import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary'>
            <Navbar
                fluid={true}
               className="bgPrimary w-[92%] mx-auto"
            >
                <Link to='/' className='flex'>
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-1 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Easy Travel BD
                    </span>
                </Link>

                <div className="flex md:order-2">
                    <Link to='/login'>
                        <button className='bgDeepPrimary py-2 px-4 rounded-lg text-white'>
                            Login | Signup
                        </button>
                    </Link>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/'>Home</Link>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/about-us'>About Us</Link>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/our-partners'>Our Partners</Link>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/query'>Query</Link>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/contact-us'>Contact Us</Link>
                    <Link className='text-white font-bold hover:underline underline-offset-2' to='/cancel-ticket'>Cancel Tickets</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;