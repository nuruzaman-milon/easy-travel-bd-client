import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import pic1 from '../../../assets/buy ticket/buy-step-1-search.v2.png'
import pic2 from '../../../assets/buy ticket/buy-step-1-trips.v2.png'
import pic3 from '../../../assets/buy ticket/pic3.png'
import pic4 from '../../../assets/buy ticket/pic4.png'
import pic5 from '../../../assets/buy ticket/buy5.png'
import pic6 from '../../../assets/buy ticket/pic6.jpg'
import pic7 from '../../../assets/buy ticket/pic7.png'
import './searchFrom.css'

const HowToBuyModal = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);

    return (
        <React.Fragment
        >
            <button className='bg-green-500 py-2 px-6 mb-3 lg:mb-0 lg:mr-4 rounded' onClick={() => setShowInfoModal(true)}>
                How to Buy Ticket
            </button>
           
           <Modal
                show={showInfoModal ? true : false}
               
                onClose={() => setShowInfoModal(false)}
            >
                <Modal.Header>
                    <span className='text-center text-[#808080a6]'>How to Buy Ticket</span>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 text-[#555]">
                       {/* step 1 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 1</h2>
                            
                            </div>
                            <p className='mt-3'>1. Select <strong>From </strong> location, <strong>To </strong> location,
                            <strong> Journey Date</strong>,
                            <strong> Time Period </strong> and  <strong>Coach Type</strong>. 
                            </p>
                            <p>2. Press Search button.</p>
                            
                            <img className='my-3 ml-2' src={pic1} alt=''/>

                            <p className='my-2'>3. You will get Available Trips. Select View Seats button to expand the details of a trip.</p>
                            <img className='my-3 ml-2' src={pic2} alt=''/>
                        </div>

                        {/* step 2 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 2</h2>
                            
                            </div>
                            <p className='mt-3'>1. Select seats.
                            </p>
                            <p>2. Select your preferred boarding point.</p>
                            <p>3. Press Continue button.</p>
                            <img className='my-3 ml-2' src={pic3} alt=''/>
                        </div>
                        {/* step 3 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 3</h2>
                            
                            </div>
                            <p className='mt-3'>1. You will be taken to Login screen. If you already have created your user account before please login using your credentials. If not click on signup link and follow the process.
                            </p>
                            <img className='my-3 ml-2' src={pic4} alt=''/>
                            <p className='mt-3'>2. After successful login you will get a glance of the ticket details based on your selections.</p>
                            <img className='my-3 ml-2' src={pic5} alt=''/>
                            <p className='mt-3'>3. Select the checkbox agreeing the terms & conditions.</p>
                            <p>4. Press Proceed to Pay button.</p>
                        </div>
                        {/* step 4 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 4</h2>
                            
                            </div>
                            <p className='mt-3'>1. You will be taken to SSL Commerz payment gateway.
                            </p>
                            <p className='mt-3'>2. Select your preferred payment method and follow the gateway instructions.</p>
                            <img className='my-3 ml-2 pic6' src={pic6} alt=''/>
                            <p className='mt-3'>3. Upon successful payment you will be redirected to confirmation page and your reservation is done.</p>
                            <img className='my-3 ml-2' src={pic7} alt=''/>
                            <p className='mt-3'>4. After successful reservation you will get a SMS and email stating the details of your ticket.</p>
                            <p>5. Done.</p>
                        </div>
                      
                    </div>
                </Modal.Body>
            </Modal>
         
        </React.Fragment>
    );
};

export default HowToBuyModal;