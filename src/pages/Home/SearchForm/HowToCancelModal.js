import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import pic1 from '../../../assets/cencal ticket/cancel-1.png'
import pic2 from '../../../assets/cencal ticket/cancel-2.png'
import './searchFrom.css'

const HowToCancelModal = () => {
    const [showCancelModal, setShowCancelModal] = useState(false);

    return (
        <React.Fragment>
            <button className='bg-yellow-400 py-2 px-6 mb-3 lg:mb-0 lg:mr-4 rounded' onClick={() => setShowCancelModal(true)}>
                How to Cancel Ticket
            </button>
            <Modal
                show={showCancelModal ? true : false}
                onClose={() => setShowCancelModal(false)}
            >
                <Modal.Header>
                    How to Cancel Ticket
                </Modal.Header>
                <Modal.Body>
                <div className="space-y-6 text-[#555]">
                       {/* step 1 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 1</h2>
                            
                            </div>
                            <p className='mt-3'>1. Select Ticket Operation tab.
                            </p>
                            <p>2. Enter ticket PNR and click on Search then you will get ticket information / details.</p>
                            
                            <img className='my-3 ml-2' src={pic1} alt=''/>
                        </div>

                        {/* step 2 */}
                        <div className='mt-5 pl-2'>
                            <div className='headline'>
                            <h2 className='text-2xl font-semibold'>Step 2</h2>
                            
                            </div>
                            <p className='mt-3'>1. From ticket information / details you will see Cancel Ticket button if the ticket is eligible for cancellation.
                            </p>
                            <p>2. Read terms and conditions and click on chekbox to agree.</p>
                            <img className='my-3 ml-2' src={pic2} alt=''/>
                            <p className='my-2'>3. Press Cancel Ticket and Refund button to proceed.</p>
                        </div>
                       
                        {/* step 4 */}
                        <div className='mt-5 pl-2'>
                        <p className='text-center my-2'>Refunds will be processed automatically at the time of cancellation. Depending on the customer’s Bank/Card/M-Cash, it may take 3-14 business days to reflect the credit in your account.</p>
                        </div>
                      
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default HowToCancelModal;