import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import ViewDetails from './ViewDetails';

const AvailableTrips = ({totalData}) => {
    const [view, setView] = useState(false)
    console.log(totalData);
    const {BusName, BusNumber, CoachType, Date, DepartureTime, Facilities, Fare, From, ReportingTime, SeatCapacity, To, created_at } = totalData;

    const sliceTime = Date.slice(0,10)
    return (
        <div className='border border-primary bg-slate-100 hover:bg-slate-200 duration-300 ease-in mb-6'>
            <section className='grid md:grid-cols-6'>
                <div className='p-3'>
                    <h1 className='text-xl font-semibold'>Type</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p className='font-semibold'>{BusNumber}</p>
                        <p>{From}</p>
                        <p>To</p>
                        <p>{To}</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Reporting</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>{ReportingTime}</p>
                        {/* <p>Friday</p> */}
                        <p>{sliceTime}</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Departure</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>{DepartureTime}</p>
                        {/* <p>Friday</p> */}
                        <p>{sliceTime}</p>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none flex gap-3 md:flex-col md:gap-0 p-3'>
                    <div>
                        <h1 className='text-xl font-semibold'>Boarding</h1>
                        <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                            <p>{From}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Destination</h1>
                        <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                            <p>{To}</p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-primary md:border-none p-3'>
                    <h1 className='text-xl font-semibold'>Fare</h1>
                    <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-3'>
                        <p>BDT</p>
                        <p className='font-bold text-2xl'>{Fare}</p>
                    </div>
                </div>
                <div onClick={() => setView(!view)} className='flex justify-center items-center border-t border-primary md:border-none p-3'>
                        <button className='py-3 px-4 font-semibold bg-primary hover:bg-[#1099a5] duration-300 ease-in text-white'>View Seats</button>
                </div>
            </section>

            <div>
                {
                    view && <ViewDetails totalData={totalData}></ViewDetails>
                }
            </div>
        </div>
    );
};

export default AvailableTrips;