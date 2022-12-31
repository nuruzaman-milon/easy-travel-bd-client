import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetails = () => {
    return (
        <section>
            <hr className='border-primary' />

            <div className='pl-4 pt-4'>
                <div className='flex items-center'>
                    <div className='w-4 h-4 bg-[#008000] mr-1'>

                    </div>
                    <h1>Available Seat</h1>
                </div>
                <div className='flex items-center'>
                    <div className='w-4 h-4 bg-rose-600 mr-1'>

                    </div>
                    <h1>Sold Seat</h1>
                </div>
                <div className='flex items-center'>
                    <div className='w-4 h-4 bgDeepPrimary mr-1'>

                    </div>
                    <h1>Selected Seat</h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='w-56 border-2 border-gray-900 p-4 m-4'>
                    <div className='border border-gray-400 p-1 mb-3 mx-auto'>
                        <h1>Front</h1>
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='grid grid-cols-1 gap-2 text-center text-white cursor-pointer'>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    A1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    B1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    C1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    D1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    E1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    F1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    G1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    H1
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    I1
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-2 text-center text-white cursor-pointer'>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    A2
                                </div>
                                <div className='w-8 p-1 bg-gray-600 rounded-sm'>
                                    B2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    C2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    D2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    E2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    F2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    G2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    H2
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    I2
                                </div>
                            </div>
                        </div>


                        <div className='grid grid-cols-2 gap-4'>
                            <div className='grid grid-cols-1 gap-2 text-center text-white cursor-pointer'>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    A3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    B3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    C3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    D3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    E3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    F3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    G3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    H3
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    I3
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-2 text-center text-white cursor-pointer'>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    A4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    B4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    C4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    D4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    E4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    F4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    G4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    H4
                                </div>
                                <div className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    I4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-3'>
                    <h1 className='font-semibold'>Booking Details :</h1>
                    <table className='border-collapse'>
                        <tr className='border border-gray-600'>
                            <th className='border border-gray-600 p-2'>Selected Seat</th>
                            <th className='border border-gray-600 p-2'>Fare (TK)</th>
                            <th className='border border-gray-600 p-2'>Action</th>
                        </tr>
                        <tr className='border border-gray-600'>
                            <td className='border border-gray-600 p-2'>
                                <div className='text-white text-center mx-auto w-8 p-1 bg-gray-600 rounded-sm'>
                                    B2
                                </div>
                            </td>
                            <td className='border border-gray-600 p-2'>Total Amount (TK) : 1500</td>
                            <td className='border border-gray-600 p-2 text-center'><button className='bg-red-600 px-2 text-white'>X</button></td>
                        </tr>
                        <tr className='border border-gray-600'>
                            <td className='border border-gray-600 p-2'>Total Selected Seats : 1</td>
                            <td className='p-2'>Total Amount (TK) : 1500</td>
                        </tr>
                    </table>

                    <Link>
                        <button className='bg-[#11585c] py-1 px-3 text-white mt-4 w-full'>NEXT</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ViewDetails;