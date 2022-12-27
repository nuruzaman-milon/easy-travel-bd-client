import { useQuery } from '@tanstack/react-query';
import React from 'react';
import road from "../../assets/icons/road.png"

const OurPartners = () => {

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ["ourPartners"],
        queryFn: () => fetch("http://localhost:5000/partners")
            .then(res => res.json())
    })

    const ourPartners = data.data;
    console.log(ourPartners);
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-primary text-3xl'>OUR BUS PARTNERS</h1>
            <div>
                {
                    ourPartners?.map(partner =>
                        <div key={partner._id} className='lg:flex md:flex bg-[#1e9ca8] justify-between items-center rounded my-14'>
                            <img className='lg:w-2/5 md:w-2/5 w-full h-full lg:rounded-l md:rounded-l' src={partner.image} alt="" />
                            <div className='lg:p-4 w-full p-4'>
                                <h1 className='font-bold lg:text-3xl md:text-2xl sm:text-xl uppercase mb-4 text-center'>{partner.name}</h1>
                                <p className='text-center font-semibold p-2'>{partner.aboutUs}</p>
                                <div className='flex justify-evenly'>
                                    <div>
                                        <h3 className='lg:text-xl font-semibold mb-2'>Our Roads</h3>
                                        <div>

                                            {
                                                partner.famousRoutes?.map(route =>
                                                    <p className='flex items-center gap-x-2'><img className='w-5' src={road} alt="" />{route}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='lg:text-xl font-semibold mb-2'>Our Facilities</h3>
                                        <div>
                                            {
                                                partner.facilities?.map(facility =>
                                                    <p className='flex items-center'><span className='text-xs'>⚫</span>{facility}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurPartners;