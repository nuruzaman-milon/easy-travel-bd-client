import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewDetails = ({ totalData }) => {
    const { BusName, BusNumber, CoachType, Date, DepartureTime, Facilities, Fare, From, ReportingTime, SeatCapacity, To, SeatCombination, created_at } = totalData;
    const [clicked, setClicked] = useState([]);
    function clickFunc(seatNumber) {
        setClicked((array) => [...array, seatNumber]);
        
    }

    console.log(clicked);
    //delete a item 
    function deleteItem(number) {
        console.log(number);
        const remaining = clicked.filter((del) =>del !== number)
        setClicked(remaining)
    }
// const removeSecond = () => {
//     setFruits((current) =>
//       current.filter((fruit) => fruit.id !== 2)
//     );
//   };
    // console.log(clicked);
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
                        {/* <div className='grid grid-cols-2 gap-4'> */}
                        <div className={`grid ${SeatCapacity === 36 ? 'grid-cols-4 gap-5' : 'grid-cols-3 gap-6'}  text-center text-white cursor-pointer `}>
                            {
                                SeatCapacity === 36 && SeatCombination.map((seat, i) => <button onClick={() => clickFunc(seat?.SeatNumber)} className='w-8 p-1 bg-[#008000] rounded-sm'>
                                    {seat?.SeatNumber}
                                </button>)
                            }
                            {
                                SeatCapacity === 27 && SeatCombination.map(seat => <button onClick={() => clickFunc(seat?.SeatNumber)} className='w-8 p-1 bg-[#008000] rounded-sm'>
                                {seat?.SeatNumber}
                            </button>)
                            }

                        </div>
                        {/* </div> */}
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
                            {
                                clicked.map(singleClick => <tr className='border border-gray-600'>
                                <td className='border border-gray-600 p-2'>
                                    <div className='text-white text-center mx-auto w-8 p-1 bg-gray-600 rounded-sm'>
                                        {singleClick}
                                    </div>
                                </td>
                                <td className='border border-gray-600 p-2 text-center'>৳{Fare}</td>
                                <td className='border border-gray-600 p-2 text-center'><button onClick={()=>deleteItem(singleClick)} className='bg-red-600 px-2 text-white'>X</button></td>
                            </tr>)
                            }
                        
                        <tr className='border border-gray-600'>
                            <td className='border border-gray-600 p-2'>Total Selected Seats : {clicked.length}</td>
                            <td className='p-2'>Total Amount (TK) : {clicked.length * Fare}</td>
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