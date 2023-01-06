import React, { useState } from 'react';
import MyBusDetails from './MyBusDetails';
import './MyBusesStyle.css'
import MyBusRow from './MyBusRow';

const MyBuses = () => {
    const [viewDetails, setViewDetails] = useState(false)
    return (
        <section className='my-8'>
            <div>
                <h1 className='mb-3 font-bold text-2xl'>My Buses <span className='px-2 rounded-full w-4 bg-primary text-white text-center'>1</span></h1>
                <table>
                    <thead className='bg-primary'>
                        <tr className='bg-primary'>
                            <th scope="col">Bus Name</th>
                            <th scope="col">Seats</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Date</th>
                            <th scope="col" className='hidden md:block'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MyBusRow
                            viewDetails={viewDetails}
                            setViewDetails={setViewDetails}
                        ></MyBusRow>
                    </tbody>
                </table>
                {
                    viewDetails && <MyBusDetails className='transition-all duration-500'></MyBusDetails>
                }
            </div>
        </section>
    );
};

export default MyBuses;