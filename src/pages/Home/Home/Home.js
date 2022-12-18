// import { Button } from 'flowbite-react';
import React from 'react';
import AvailableBusOperators from '../AvailableBusOperators/AvailableBusOperators';
import Banner from '../Banner/Banner';
import BusOperator from '../BusOperator/BusOperator';
import BusRoutes from '../BusRoutes/BusRoutes';
import OurAmenities from '../OurAmenities/OurAmenities';
import PaymentSystems from '../PaymentSystems/PaymentSystems';
import SearchForm from '../SearchForm/SearchForm';
import TopBusRoutes from '../TopBusRoutes/TopBusRoutes';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            {/* Add the components one by one */}
            <Banner />
            <SearchForm />
            <WhyUs />
            <OurAmenities />
            <BusOperator />
            <TopBusRoutes />
            <PaymentSystems />
            <BusRoutes></BusRoutes>
            <AvailableBusOperators></AvailableBusOperators>
        </div>
    );
};

export default Home;