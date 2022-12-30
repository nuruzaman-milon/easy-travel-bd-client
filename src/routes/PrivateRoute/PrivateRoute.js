import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useSelector((state) => state.user);
    const location = useLocation();

    if (isLoading) {
        return <div className='flex flex-col justify-center items-center h-screen'>
            <progress className="progress w-56"></progress>
            <h2 className='text-2xl'>Loading...</h2>
        </div>

    }
    if (user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;