import React from 'react';

const MyBusDetails = () => {
    return (
        <section className='border border-primary' >
            <div className='flex flex-col md:flex-row md:items-center gap-4 pl-4 pt-4'>
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

            </div>

            <div className='grid md:grid-cols-4 gap-4'>
                <div className='w-56 border-2 border-gray-900 m-4 p-4'>
                    <div className='border border-gray-400 p-1 mb-3 mx-auto'>
                        <h1>Front</h1>
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <div className={`grid grid-cols-4 gap-5 text-center text-white cursor-pointer `}>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>
                            <button className='w-8 p-1 bg-[#008000] rounded-sm'>
                                A1
                            </button>


                        </div>

                    </div>
                </div>
                <table className='table1 col-span-3 mt-4'>
                    <tbody className='tbody1'>
                        <tr className='tr1'>
                            <td className='td1' data-label="Bus Name">Safar Poribohon</td>
                            <td className='td1' data-label="Seats">30</td>
                            <td className='td1' data-label="From">Dhaka</td>
                            <td className='td1' data-label="To">Rangpur</td>
                            <td className='td1' data-label="Reporting">10:30 AM 2023-01-10</td>
                            <td className='td1' data-label="Departure">11:30 AM 2023-01-10</td>
                            <td className='td1' data-label="Boarding">Dhaka</td>
                            <td className='td1' data-label="Destination">Rangpur</td>
                            <td className='td1' data-label="Fare">BDT 1000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyBusDetails;