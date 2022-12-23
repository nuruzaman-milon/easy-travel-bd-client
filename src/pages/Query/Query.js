import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Query = () => {
    const form = useRef();

    // sound
    function playSound() {
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3');
        audio.play();
    }

    // --------------------------

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
        <div className='py-6 md:px-16 '>
            <h1 className='text-center font-bold text-primary text-3xl'>Send Your Query</h1>
            <div className='grid md:grid-cols-2 w-[96%] mx-auto'>

                <div className='order-last md:order-first w-[96%] md:w-full mx-auto md:my-8'>
                    <img className='h-full hidden md:block md:rounded-l-md' src='https://i.ibb.co/1ZrfmtK/query.jpg' alt="" />
                </div>

                <form ref={form} onSubmit={sendEmail}

                    className='bg-slate-100 w-[96%] md:w-full mx-auto p-6 md:rounded-r-md my-8'>
                    <div>
                        <div className='backdrop-blur grid md:grid-cols-2 md:gap-3'>
                            <div>
                                <label for="small-input" className="block mb-1 text-blue-900 font-semibold">First Name</label>
                                <input
                                    name="first_name"
                                    type="text" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 focus:border-primary dark:text-white outline-0" placeholder='First Name' required />
                            </div>
                            <div>
                                <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Last Name</label>
                                <input
                                    name="last_name"
                                    type="text" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 focus:border-primary dark:text-white outline-0" placeholder='Last Name' />
                            </div>
                        </div>

                        <div>
                            <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Email Address</label>
                            <input
                                name="user_email"
                                type="email" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white focus:border-primary outline-0" placeholder='Email Address' required />
                        </div>

                        <div>
                            <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Subject</label>
                            <input
                                name="subject"
                                type="text" id="small-input" className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white focus:border-primary outline-0" placeholder='Subject' required />
                        </div>

                        <div>
                            <label for="small-input" className="block mb-1 text-blue-900 font-semibold">Message</label>
                            <textarea name="message" id="" cols="30" rows="10"
                                className="block w-full rounded-md mb-3 p-2 text-gray-900 border dark:bg-slate-400 dark:text-white outline-0 h-24 resize-none"
                                placeholder='Please Enter Your Message....' required
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className="w-full inline-block px-2 py-3 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-md hover:bg-[#0bb0bf] hover:shadow-lg duration-300 ease-in focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition">SEND MESSAGE
                    </button>
                </form>
            </div >
        </div >
    );
};

export default Query;
