import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import TicketResults from './TicketResults';

const CancelTicket = () => {
    return (
        <section className='py-8'>
            <h1 className='text-center font-bold text-primary text-3xl mb-6'>Cancel Ticket</h1>
            <form className="mx-auto flex flex-col md:w-[700px]">
                <div className='mb-3'>
                    <div className="mb-2 block">
                        <Label htmlFor="pnr" value="Ticket PNR*" />
                    </div>
                    <TextInput
                        name="pnr"
                        id="pnr"
                        type="text"
                        placeholder="Ticket PNR"
                        required={true}
                    />
                </div>

                <div className="mb-2 block">
                    <Label htmlFor="number" value="Your Number" />
                </div>
                <div className='grid md:grid-cols-4'>
                    <div className='md:col-span-3'>

                        <TextInput
                            name="number"
                            id="number"
                            type="number"
                            placeholder="Your Number"
                            required={true}
                        />
                    </div>
                    <input
                        className="bg-primary hover:bg-[#0f9fac] duration-300 ease-in py-2 w-full md:ml-3 mt-3 md:mt-0 px-4 rounded-lg cursor-pointer font-medium text-white"
                        type="submit"
                        value="Find Ticket"
                    />
                </div>

            </form>

            <div className='flex justify-center w-full'>
                <TicketResults></TicketResults>
            </div>
        </section>
    );
};

export default CancelTicket;