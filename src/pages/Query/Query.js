import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import img from '../../assets/images/query.png'

const Query = () => {
    const form = useRef();

    // sound
    function playSound() {
        console.log('object');
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3');
        audio.play();
    }

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_ywcaijc', 'template_7z24f8z', form.current, '9dKX9Y2VsLt6aYN6Y')
            .then((result) => {
                playSound()
                toast.success('Message Send Successfully')
                event.target.reset()
            }, (error) => {
                toast.error('Message Send UnSuccessfully')
            });
    };
    return (
        <section className='my-8 relative'>

            <div className='md:bg-gray-600'>
                <form ref={form} onSubmit={sendEmail} className='relative md:absolute bg-white md:top-0 md:left-36 w-[96%] md:w-96 mx-auto p-6 rounded-md my-8'>
                    <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Full Name</label>
                    <input
                        name="user_name"
                        type="text" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white outline-0" placeholder='Full Name' required />

                    <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Email Address</label>
                    <input
                        name="user_email"
                        type="email" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white outline-0" placeholder='Email Address' required />

                    <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Subject</label>
                    <input
                        name="subject"
                        type="text" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white outline-0" placeholder='Subject' required />

                    <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"
                        className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white outline-0 h-24 resize-none"
                        placeholder='Please Enter Your Message....' required
                    ></textarea>

                    <button type="submit" className="w-full inline-block px-2 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SEND MESSAGE
                    </button>
                </form>
                <div className='my-10 hidden md:block'>
                    <img className='h-[540px]' src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Query;