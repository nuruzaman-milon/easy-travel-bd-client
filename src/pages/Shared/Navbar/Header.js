import { signOut } from 'firebase/auth';
import { Navbar } from 'flowbite-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config';
import { setLogOut } from '../../../redux/userSlice';

const Header = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();

    const logOut = () => {
        signOut(auth)
            .then(dispatch(setLogOut({ user: null })))
    }

    return (
        <div className='bg-primary'>
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
                    <span className="self-center whitespace-nowrap text-xl font-semibold">
                        Easy Travel BD
                    </span>
                </Link>

                <div className="flex md:order-2">
                    {user?.uid ?
                        <button onClick={logOut} className='py-2 px-4 rounded-lg font-semibold bg-[#11585c] text-white'>
                            Log out
                        </button>
                        :
                        <Link to='/login'>
                            <button className='py-2 px-4 rounded-lg font-semibold bg-[#11585c] text-white'>
                                Login | Signup
                            </button>
                        </Link>
                    }
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className='flex items-center justify-center'>
                    {/* <Link className='text-white text-center text-lg hover:underline underline-offset-2' to='/'>Home</Link> */}
                    <div className='flex items-center text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-5 h-5 mr-1' src="https://i.ibb.co/wrSbyP0/info.png" alt="" />
                        <Link to='/about-us'>About Us</Link>
                    </div>
                    <div className='flex items-center text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-6 mr-1' src="https://i.ibb.co/3c5LrCH/handshake.png" alt="" />
                        <Link to='/our-partners'>Our Partners</Link>
                    </div>
                    <div className='flex items-center text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-5 h-5 mr-1' src="https://i.ibb.co/cXHrFMB/analytic.png" alt="" />
                        <Link to='/query'>Query</Link>
                    </div>
                    <div className='flex items-center text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-5 h-5 mr-1' src="https://i.ibb.co/ZXqNPLt/phone-call.png" alt="" />
                        <Link to='/contact-us'>Contact Us</Link>
                    </div>
                    <div className='flex items-center text-black text-center text-lg hover:text-black md:hover:text-white hover:underline underline-offset-2 mb-2 md:mb-0'>
                        <img className='w-5 h-5' src="https://i.ibb.co/D4LKyqN/receipt.png" alt="" />
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