import React from 'react';

const AboutUs = () => {
    return (
       <section >
        <h1 className='text-center font-bold text-primary text-3xl mt-12'>About Us</h1>
         <div className='border border-primary py-4 px-8 my-12 mx-4 rounded shadow-sm shadow-primary '>
            
            {/* div 1 */}

            <div>
                <h2 className='text-primary text-2xl font-semibold mb-4'>Company Profile</h2>
                <p className='text-justify leading-7'>Easy Travel BD is apparently a family owned transport company specializing in transportation of passenger bus services since 1990. From a humble beginning of local services, our transport system encompasses all reachable areas of Bangladesh and also beyond the border, extending our reach to many different places. <br />

                    We worked hard and honest, we put our vision forward and explored ways and means to continuously improve passenger comfort, and as a result, we were able to introduce the 1st ever Air- Conditioned bus services in Bangladesh. We take pride in mentioning that our fleet of buses includes the most luxurious models of VOLVO and SCANIA Imported from Europe, which provide the ultimate in passenger comfort and safety. <br />

                    The company at present operates more then 60 (Sixty) buses on schedule routes employing over 200 trained staff and safely transporting over a million passengers a year.</p>
            </div>

            {/* div 2 */}

            <div>
                <h2 className='text-primary text-2xl font-semibold mt-5 mb-4'>Our Mission</h2>
                <p className='text-justify leading-7'>The mission of the Transport Company may be categorized by 3 principal activities as follows.</p>
                <ul className='text-justify px-4 leading-7'>
                    <li className='list-disc'>Aim for efficient services through constant development towards world-class standards. The priorities are safety, convenience, cleanliness, modernity and punctuality on each and every journey.</li>
                    <li className='list-disc'>Create customer satisfaction and meet passenger needs. The service network must allow for ease of connections and uninterrupted nationwide travel.</li>
                    <li className='list-disc'>Implement a system of management that is both efficient and streamlined. Capitalise on the potential of employees, by building teamwork. Reduce waste and non-productivity, in the interest of quality management and to compete with the private sector.</li>
                </ul>
            </div>

            {/* div 3 */}

            <div>
                <h2 className='text-primary text-2xl font-semibold mt-5 mb-4'>Our Vision</h2>
                <p className='text-justify leading-7'>To be the leader of domestic land based transport, with world-class service standards, efficient management, employing modern technologies and quality personnel.</p>
            </div>

            {/* div 4 */}

            <div>
                <h2 className='text-primary text-2xl font-semibold mt-5 mb-4'>Our Management</h2>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Md. Nuruzaman Milon</span> <span>Managing Director</span></p>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Sazzad Hossain</span> <span>Deputy Managing Director</span></p>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Moutosi Showrin Raka</span> <span>Director Marketing</span></p>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Robiul Alam</span> <span>General Manager</span></p>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Khubaibul Islam Shakib</span> <span>Production Manager</span></p>
                <p className='text-justify flex flex-col'><span className='text-lg font-semibold'>Saqib Ahmad</span> <span>Stuff Manager</span></p>
            </div>
        </div>
       </section>
    );
};

export default AboutUs;