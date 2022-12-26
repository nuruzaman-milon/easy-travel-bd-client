import React from 'react';
import road from '../../../assets/icons/road.png'

const BusRoutes = () => {
    return (
        <section className='my-12 md:my-20'>
            <h1 className='text-center font-bold text-primary text-3xl mb-14'>TOP BUS ROUTES</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-6'>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Madaripur-Dhaka</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka-Madaripur</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Sylhet-Dhaka</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Chittagong-Dhaka</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka-Bogura-Naogaon</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Shyamnagar-Satkhira-Jessore-Dhaka</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka - Sayestagong - Syhlet</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka - Sreemangal - Moulvibazar</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka - Shayestaganj - Sherpur - Sylhet</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka-Rajshahi-Chapai</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Dhaka -Jessore - Noapara - Khulna</p>
                </div>
                <div className='flex items-center gap-3 py-3 px-3 rounded-md bg-gray-200 dark:text-white text-gray-900'>
                    <img className='w-7' src={road} alt="Road icon" />
                    <p>Sylhet - Narsingdi - Bhairab - Dhaka</p>
                </div>
            </div>

        </section>
    );
};

export default BusRoutes;