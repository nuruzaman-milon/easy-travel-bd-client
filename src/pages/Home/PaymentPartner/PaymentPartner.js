import React from 'react';

const PaymentPartner = () => {
    return (
        <div className="lg:w-[80%] mx-auto my-10">
            <h1 className="lg:text-3xl text-center font-bold mt-5 mb-10">Our Online Payment Partner</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-10 w-[90%] mx-auto">
                <img className="w-36 h-20" src="https://i.ibb.co/J59T3k6/bkash.png" alt="Bkash-Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/3Ynszq6/Nagad-Logo-wine.png" alt="Nagad-Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/XVs3VGL/upay.png" alt="Rocket-Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/KVGpbzc/upay-logo-44-D7-B11-A45-seeklogo-com.png" alt="Upay Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/ssrn6tr/American-Express.png" alt="American Express Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/tDZ6gR3/dbbl.png" alt="DBBL Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/Z2KYJgJ/mastercard.png" alt="MasterCard Logo" />
                <img className="w-36 h-20" src="https://i.ibb.co/VpFS0zs/Visa-Logo.png" alt="Visa Logo" />
            </div>
        </div>
    );
};

export default PaymentPartner;