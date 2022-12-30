import React from 'react';

const TicketOperation = () => {
    return (
        <div>
            <form class="flex p-6">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>

                <div class="grid md:grid-cols-8 w-full">
                    <input type="search" id="search-dropdown" class="col-span-7 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-md rounded-r-md md:rounded-r-none border-l-gray-100 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Please Enter Ticket PNR" required />

                    <button type="submit" class="mt-4 md:mt-0 px-8 p-2.5 flex items-center text-sm font-medium text-white bg-blue-700 rounded-r-md rounded-l-md md:rounded-l-none border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span>Search</span></button>
                </div>
            </form>
        </div>
    );
};

export default TicketOperation;