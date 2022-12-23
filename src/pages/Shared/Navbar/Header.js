import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <Navbar
                fluid={true}
                className="w-[92%] mx-auto !bg-primary"
            >
                <Link to='/' className='flex'>
                    <img
                        src="https://i.ibb.co/gWb6JWb/business-class.png"
                        className="mr-1 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold hover:text-white">
                        Easy Travel BD
                    </span>
                </Link>

                <div className="flex md:order-2">
                    <Link to='/login'>
                        <button className='py-2 px-4 rounded-lg font-semibold hover:bg-[#11585c] hover:text-white'>
                            Login | Signup
                        </button>
                    </Link>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className='flex items-center justify-center'>
                    {/* <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/'>Home</Link> */}
                    <div className='flex text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-7 mr-1' src="https://i.ibb.co/wrSbyP0/info.png" alt="" />
                        <Link to='/about-us'>About Us</Link>
                    </div>
                    <div className='flex text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-7 mr-1' src="https://i.ibb.co/3c5LrCH/handshake.png" alt="" />
                        <Link to='/our-partners'>Our Partners</Link>
                    </div>
                    <div className='flex text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-7 mr-1' src="https://i.ibb.co/cXHrFMB/analytic.png" alt="" />
                        <Link to='/query'>Query</Link>
                    </div>
                    <div className='flex text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-7 mr-1' src="https://i.ibb.co/ZXqNPLt/phone-call.png" alt="" />
                        <Link to='/contact-us'>Contact Us</Link>
                    </div>
                    <div className='flex text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-7' src="https://i.ibb.co/D4LKyqN/receipt.png" alt="" />
                        <Link to='/cancel-ticket'>Cancel Ticket</Link>
                    </div>
                    {/* <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/our-partners'>Our Partners</Link>
                    <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/query'>Query</Link>
                    <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/contact-us'>Contact Us</Link>
                    <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/cancel-ticket'>Cancel Tickets</Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;