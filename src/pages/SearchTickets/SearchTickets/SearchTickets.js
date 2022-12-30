import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AvailableTrips from '../AvailableTrips/AvailableTrips';
import FindTicket from '../FindTicket/FindTicket';
import BuyTicket from './BuyTicket';
import TicketOperation from './TicketOperation';

const SearchTickets = () => {
    const location = useLocation();
    const search = location?.state?.search;
    const [open, setOpen] = useState(true)

    console.log(search)

    return (
        <section className='my-8'>
            <div className='border-x border-b border-primary'>
                <div className='grid grid-cols-2 h-12 cursor-pointer'>
                    <div onClick={() => setOpen(true)} className={`flex justify-center items-center ${open ? 'bg-[#11585c]' : 'bg-primary'}`}>
                        <h1 className='text-white font-semibold'>Buy Ticket</h1>
                    </div>
                    <div onClick={() => setOpen(false)} className={`flex justify-center items-center ${!open ? 'bg-[#11585c]' : 'bg-primary'}`}>
                        <h1 className='text-white font-semibold'>Ticket Operation</h1>
                    </div>
                </div>

                <div>
                    {
                        open ?
                            <BuyTicket></BuyTicket>
                            :
                            <TicketOperation></TicketOperation>
                    }
                </div>
            </div>

            <div>
                {
                    open ?
                        <section className='my-8'>
                            <h1 className='font-bold text-2xl text-primary'>Available Trips: <span>1</span></h1>
                            <hr className='mb-6 mt-2' />
                            <AvailableTrips></AvailableTrips>
                        </section>
                        :
                        <section>
                            <FindTicket></FindTicket>
                        </section>
                }
            </div>
        </section>
    );
};

export default SearchTickets;