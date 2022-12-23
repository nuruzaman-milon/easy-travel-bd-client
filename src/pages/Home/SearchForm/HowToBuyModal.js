import { Modal } from 'flowbite-react';
import React, { useState } from 'react';

const HowToBuyModal = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);

    return (
        <React.Fragment>
            <button className='bg-green-500 py-2 px-6 mb-3 lg:mb-0 lg:mr-4 rounded' onClick={() => setShowInfoModal(true)}>
                How to Buy Ticket
            </button>
            <Modal
                show={showInfoModal ? true : false}
                onClose={() => setShowInfoModal(false)}
            >
                <Modal.Header>
                    <span className='text-center'>How to Buy Ticket</span>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default HowToBuyModal;