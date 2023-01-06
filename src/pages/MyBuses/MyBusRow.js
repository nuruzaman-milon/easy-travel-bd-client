import React from 'react';

const MyBusRow = ({ viewDetails, setViewDetails }) => {
    return (
        <tr>
            <td data-label="Bus Name">Safar Poribohon</td>
            <td data-label="Seats">30</td>
            <td data-label="From">Dhaka</td>
            <td data-label="To">Rangpur</td>
            <td data-label="Bus Name">10/01/2023</td>
            <td>
                <button onClick={() => setViewDetails(!viewDetails)} className='w-full md:w-fit inline bg-primary hover:bg-[#179ca8] duration-300 ease-in px-2 py-2 text-white rounded'>View Details</button>
            </td>
        </tr>
    );
};

export default MyBusRow;