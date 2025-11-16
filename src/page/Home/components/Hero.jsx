import React from 'react';

import { Link } from 'react-router';
import Btn from '../../../shared/Btn';

const Hero = () => {
    return (
        <div className='container mx-auto my-10 relative'>
            <img className='' src="https://sakib-ecommerce-react-router.netlify.app/assets/HERO-COVER-COJiELkF.jpg" alt="" />
          
                <div className='flex flex-col justify-center h-full items-center text-center md:items-start md:text-left gap-3 absolute top-0 left-40'>
                    <h3 className='cp text-lg sm:text-xl md:text-2xl font-semibold text-[#5CAF90]'>70% Off For This Winter</h3>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold ct'>Bigest Sale For Winter<br /> Man & Woman</h1>
                    <Link to="/shop">
                       <Btn text="Shop now"></Btn>
                    </Link>
               
            </div>
        </div>
    );
};

export default Hero;