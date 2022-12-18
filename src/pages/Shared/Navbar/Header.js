import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar
                fluid={true}
               
                className="bgPrimary"
            >
                <Link to='/' className='flex'>
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-1 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Easy Travel BD
                    </span>
                </Link>

                <div className="flex md:order-2">
                    {/* <Button className='bg-primary'>
                        Login/Signup
                    </Button> */}
                    <Link to='/login'>
                        <button className='bgDeepPrimary py-2 px-4 rounded-lg text-white'>
                            Login | Signup
                        </button>
                    </Link>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/our-partners'>Our Partners</Link>
                    <Link to='/query'>Query</Link>
                    <Link to='/contact-us'>Contact Us</Link>
                    <Link to='/cancel-ticket'>Cancel Tickets</Link>
                    {/* <Navbar.Link href="/navbars">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Our Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Query
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact Us
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Cancel Tickets
                    </Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;