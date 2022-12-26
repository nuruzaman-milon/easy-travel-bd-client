import React from 'react';
import { Outlet } from 'react-router-dom';
import EasyFooter from '../pages/Shared/Footer/EasyFooter';
import Header from '../pages/Shared/Navbar/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='w-[90%] mx-auto'>
            <Outlet />
            </div>
            <EasyFooter />
        </div>
    );
};

export default Main;