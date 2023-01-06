import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useSelector((state) => state.user);
    const location = useLocation();

    if (isLoading) {
        return <Loading></Loading>

    }
    if (user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;