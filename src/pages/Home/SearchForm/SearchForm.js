import React, { useState } from 'react';
import { TiTicket } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import HowToBuyModal from './HowToBuyModal';
import HowToCancelModal from './HowToCancelModal';

const SearchForm = () => {

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const from = form.from.value;
        const to = form.to.value;
        const timePeriod = form.timePeriod.value;
        const date = form.date.value;
        const coachType = form.coachType.value;

        const search = {
            from,
            to,
            timePeriod,
            date,
            coachType
        }
        console.log(search);
    }

    return (
        <section className='bg-base my-10'>
            <h3 className='flex items-center text-2xl bg-primary text-white font-bold justify-center py-4'><TiTicket className='mr-2 ' /> Buy Ticket</h3>
            <div className=' border border-primary'>
                <form onSubmit={handleSearch} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mx-8 my-6 border px-2 py-6'>
                    {/* From */}
                    <select name='from' className='rounded-md'>
                        <option value="From">From</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Benapole">Benapole</option>
                    </select>

                    {/* To */}
                    <select name='to' className='rounded-md'>
                        <option value="From">To</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Benapole">Benapole</option>
                    </select>

                    {/* Time */}
                    <select name='timePeriod' className='rounded-md'>
                        <option value="Time Period">Time Period</option>
                        <option value="Morning (5:00Am-11:59Am)">Morning (5:00Am-11:59Am)</option>
                        <option value="Afternoon (12:00PM-5:59PM)">Afternoon (12:00PM-5:59PM)</option>
                        <option value="Night (6:00PM-11:59PM)">Night (6:00PM-11:59PM)</option>
                    </select>

                    {/* Calender */}
                    <input name='date' type="date" className='rounded-md' />

                    {/* Coach Type */}
                    <select name='coachType' className='rounded-md'>
                        <option value="Coach Type">Coach Type</option>
                        <option value="AC">AC</option>
                        <option value="Non AC">Non AC</option>
                    </select>

                    <button type='submit' className='bg-primary py-2 px-4 flex justify-center items-center rounded-md'>
                        <AiOutlineSearch className='text-2xl text-white' /> &nbsp; <span className='text-xl text-white'>Search</span>
                    </button>
                </form>
            </div>


            {/* Modals */}
            <div className='flex flex-col lg:flex-row lg:justify-center mt-6'>
                <HowToBuyModal />
                <HowToCancelModal />
            </div>
        </section>
    );
};

export default SearchForm;