import { signOut } from 'firebase/auth';
import { Dropdown, Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.config';
import { setLogOut } from '../../../redux/userSlice';
import { FaBus, FaPlus, FaSignOutAlt, FaTicketAlt, FaUser, FaUsersCog } from 'react-icons/fa';

const Header = () => {
    const [dbUser, setDbUser] = useState([])
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    // console.log(dbUser);
    const logOut = () => {
        signOut(auth)
            .then(dispatch(setLogOut({ user: null })))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data))
    }, [user])

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
                        <Dropdown className=''
                            label={user?.displayName?.slice(0, 1)}
                            arrowIcon={false}
                            pill={true}
                        >
                            {/* For Admin */}
                            {
                                dbUser?.accountType === 'admin' && <>
                                    <Dropdown.Item icon={FaUser}>
                                        <Link>
                                            Profile
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon={FaUsersCog}>
                                        <Link>
                                            All Users
                                        </Link>
                                    </Dropdown.Item>
                                </>
                            }

                            {/* For Bus Provider */}
                            {
                                dbUser?.accountType === 'busProvider' && <>
                                    <Dropdown.Item icon={FaUser}>
                                        <Link>
                                            Profile
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon={FaPlus}>
                                        <Link to='/add-buses'>
                                            Add Bus
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon={FaBus}>
                                        <Link>
                                            Buses
                                        </Link>
                                    </Dropdown.Item>
                                </>
                            }

                            {/* For Users */}
                            {
                                dbUser?.accountType === 'user' && <>
                                    <Dropdown.Item icon={FaUser}>
                                        <Link>
                                            Profile
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon={FaTicketAlt}>
                                        <Link>
                                            Tickets
                                        </Link>
                                    </Dropdown.Item>
                                </>
                            }
                            {/* Logout */}
                            <Dropdown.Item onClick={logOut} icon={FaSignOutAlt}>
                                <button>
                                    Log out
                                </button>
                            </Dropdown.Item>
                        </Dropdown>
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

                </Navbar.Collapse>
            </Navbar >
        </div >
    );
};

export default Header;