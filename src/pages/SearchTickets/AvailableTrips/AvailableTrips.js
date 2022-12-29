import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewDetails from './ViewDetails';

const AvailableTrips = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border border-primary bg-slate-100 hover:bg-slate-200 duration-300 ease-in'>
            <section className='grid md:grid-cols-6'>
                <div className='p-3'>
                    <h1 className='text-xl font-semibold'>Type</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p className='font-semibold'>Coach 10111</p>
                        <p>Dhaka</p>
                        <p>To</p>
                        <p>Thakurgaon</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Reporting</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>06:25 AM</p>
                        <p>Friday</p>
                        <p>30 December, 2022</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Departure</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>06:40 AM</p>
                        <p>Friday</p>
                        <p>30 December, 2022</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none flex gap-3 md:flex-col md:gap-0 p-3'>
                    <div>
                        <h1 className='text-xl font-semibold'>Boarding</h1>
                        <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                            <p>PANTHAPATH</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Destination</h1>
                        <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                            <p>THAKURGAON</p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Fare</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>BDT</p>
                        <p className='font-bold text-2xl'>1600.00</p>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='flex justify-center items-center border-t border-primary md:border-none p-3'>
                    <Link>
                        <button className='py-3 px-4 font-semibold bg-primary hover:bg-[#1099a5] duration-300 ease-in text-white'>View Seats</button>
                    </Link>
                </div>
            </section>

            <div>
                {
                    open && <ViewDetails></ViewDetails>
                }
            </div>
        </div>
    );
};

export default AvailableTrips;