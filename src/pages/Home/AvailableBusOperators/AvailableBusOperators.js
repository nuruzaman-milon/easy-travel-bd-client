import React from 'react';
import img1 from '../../../assets/icons/bus logo/img (1).png'
import img2 from '../../../assets/icons/bus logo/img (2).png'
import img3 from '../../../assets/icons/bus logo/img (3).png'
import img4 from '../../../assets/icons/bus logo/img (4).png'
import img5 from '../../../assets/icons/bus logo/img (5).png'
import img6 from '../../../assets/icons/bus logo/img (6).png'
import img7 from '../../../assets/icons/bus logo/img (7).png'
import img8 from '../../../assets/icons/bus logo/img (8).png'
import img9 from '../../../assets/icons/bus logo/img (9).png'
import img10 from '../../../assets/icons/bus logo/img (10).png'
import img11 from '../../../assets/icons/bus logo/img (11).png'
import img12 from '../../../assets/icons/bus logo/img (12).png'

const AvailableBusOperators = () => {
    return (
        <section className='mt-12'>
            <h1 className='text-center font-bold text-primary text-3xl'>AVAILABLE BUS OPERATORS</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-6'>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img1} alt="Road icon" />
                    <p>Mullick Express</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img2} alt="Road icon" />
                    <p>Parkline Transport</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img3} alt="Road icon" />
                    <p>Safe Line Paribahan</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-14' src={img4} alt="Road icon" />
                    <p>Sarbick Paribahan</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img5} alt="Road icon" />
                    <p>Almadani Paribahan</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-14' src={img6} alt="Road icon" />
                    <p>Desh Transport</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img7} alt="Road icon" />
                    <p>Desh Travels</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-14' src={img8} alt="Road icon" />
                    <p>Hamdan Express</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img9} alt="Road icon" />
                    <p>Hanif Enterprise</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img10} alt="Road icon" />
                    <p>Ishwardi Travels</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-20' src={img11} alt="Road icon" />
                    <p>Robi Express</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-2 rounded-md bg-gray-100 dark:text-white text-gray-900 font-semibold hover:border-primary hover:border duration-300 h-28 ease-in'>
                    <img className='w-36' src={img12} alt="Road icon" />
                    <p>Sonya Express</p>
                </div>
            </div>

        </section>
    );
};

export default AvailableBusOperators;