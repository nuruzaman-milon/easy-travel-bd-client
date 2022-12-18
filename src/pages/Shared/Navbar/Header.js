import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Navbar
                fluid={true}
                rounded={true}
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
                    <button className='bg-primary py-2 px-4 rounded-lg text-white'>
                        Login | Signup
                    </button>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
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
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;