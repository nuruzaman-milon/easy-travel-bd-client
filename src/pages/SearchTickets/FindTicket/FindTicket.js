import React from 'react';
import { Link } from 'react-router-dom';

const FindTicket = () => {
    return (
        <div className='py-6'>
            <hr />
            <div className='mt-6'>
                <div className='rounded-t-xl w-full bg-blue-500'>
                    <div className='flex items-center py-2 px-2'>
                        <img className='w-8' src="https://i.ibb.co/Rhjz4Y0/ticket.png" alt="" />
                        <i className='font-bold text-white ml-3 text-2xl'>Bus Ticket</i>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4 bg-slate-100 border-1 border w-full md:p-6 p-2'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">CLASS</label>
                            <input
                                name="class"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">TICKET TYPE</label>
                            <input
                                name="ticket-type"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">BUS NAME</label>
                            <input
                                name="busName"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">DATE</label>
                            <input
                                name="date"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                        <div className='col-span-2'>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">FROM</label>
                            <input
                                name="ticket-type"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                        <div className='col-span-2'>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">TO</label>
                            <input
                                name="ticket-type"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                    </div>

                    {/* ----------------------------------------- */}

                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">ADULT</label>
                            <input
                                name="adult"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">CHILD</label>
                            <input
                                name="child"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                        <div className='col-span-2'>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">EMAIL</label>
                            <input
                                name="email"
                                type="email" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                        <div className='col-span-2'>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">ROUTE</label>
                            <input
                                name="route"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">PRICE</label>
                            <input
                                name="price"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>

                        <div>
                            <label for="small-input" className="block text-blue-900 text-sm font-semibold">EXPIRE DATE</label>
                            <input
                                name="route"
                                type="text" id="small-input" className="block w-full rounded-sm text-gray-900 bg-blue-100 border-0 p-0" readOnly disabled placeholder='' required />
                        </div>
                    </div>
                </div>

                <div className='rounded-b-xl h-10 w-full bg-primary flex justify-end'>
                    <Link className='bg-[#11585c] py-3 rounded-br-xl flex items-center px-4'>
                        <img className='w-8' src="https://i.ibb.co/VSF6FZV/cloud-computing-1.png" alt="" />
                        <button className='text-white py-2 ml-2 rounded-md font-semibold uppercase'>DOWNLOAD TICKET</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindTicket;