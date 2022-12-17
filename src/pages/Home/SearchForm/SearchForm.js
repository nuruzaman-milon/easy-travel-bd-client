import React, { useState } from 'react';
import { TiTicket } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { Modal } from 'flowbite-react';

const SearchForm = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);


    return (
        <section className='bg-base'>
            <h3 className='flex items-center text-2xl bg-primary text-white font-bold justify-center py-4'><TiTicket className='mr-2 ' /> Buy Ticket</h3>
            <div className=' border border-primary'>
                <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mx-8 my-6 border px-2 py-6'>
                    {/* From */}
                    <select className='rounded-md'>
                        <option value="From">From</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Narayangoanj">Narayangoanj</option>
                    </select>

                    {/* To */}
                    <select className='rounded-md'>
                        <option value="From">To</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Narayangoanj">Narayangoanj</option>
                    </select>

                    {/* Time */}
                    <select className='rounded-md'>
                        <option value="Time Period">Time Period</option>
                        <option value="Morning (5:00Am-11:59Am)">Morning (5:00Am-11:59Am)</option>
                        <option value="Afternoon (12:00PM-5:59PM)">Afternoon (12:00PM-5:59PM)</option>
                        <option value="Night (6:00PM-11:59PM)">Night (6:00PM-11:59PM)</option>
                    </select>

                    {/* Calender */}
                    <input type="date" className='rounded-md' />

                    {/* Coach Type */}
                    <select className='rounded-md'>
                        <option value="Coach Type">Coach Type</option>
                        <option value="AC">AC</option>
                        <option value="Non AC">Non AC</option>
                    </select>

                    <button className='bg-primary py-2 px-4 flex justify-center items-center rounded-md'>
                        <AiOutlineSearch className='text-2xl text-white' /> &nbsp; <span className='text-xl text-white'>Search</span>
                    </button>
                </form>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-center mt-6'>

                <React.Fragment>
                    <button className='bg-green-500 py-2 px-6 mb-3 lg:mb-0 lg:mr-4 rounded' onClick={() => setShowInfoModal(true)}>
                        How to Buy Ticket
                    </button>
                    <Modal
                        show={showInfoModal ? true : false}
                        onClose={() => setShowInfoModal(false)}
                    >
                        <Modal.Header>
                            <span className='text-center'>How to Buy Ticket</span>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>

                <React.Fragment>
                    <button className='bg-yellow-400 py-2 px-6 mb-3 lg:mb-0 lg:mr-4 rounded' onClick={() => setShowCancelModal(true)}>
                        How to Cancel Ticket
                    </button>
                    <Modal
                        show={showCancelModal ? true : false}
                        onClose={() => setShowCancelModal(false)}
                    >
                        <Modal.Header>
                            How to Cancel Ticket
                        </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>




            </div>

        </section>
    );
};

export default SearchForm;