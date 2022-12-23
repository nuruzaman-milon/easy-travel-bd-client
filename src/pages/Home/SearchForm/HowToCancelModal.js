import { Modal } from 'flowbite-react';
import React, { useState } from 'react';

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

export default HowToCancelModal;