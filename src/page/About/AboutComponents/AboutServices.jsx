import React from 'react';
import SectionHeading from '../../../shared/SectionHeading';
import Support from '../../Home/components/Support';


const AboutServices = () => {
    return (
        <div className='my-24'>
            <div className='flex justify-center text-center mb-4'>
                <SectionHeading heading={"Our "} colorHeading={"Services"} discription={"Customer service should not be a department. It should be the entire company."}></SectionHeading>
            </div>
            <Support></Support>

        </div>
    );
};

export default AboutServices;