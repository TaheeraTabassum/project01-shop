

const LatestExclusive = () => {
    return (
        <div className='py-24 relative container mx-auto'>
            <div className=" rounded-md md:w-full w-fit ">
                <img src="https://sakib-ecommerce-react-router.netlify.app/assets/execulisive%20colloction-xPfol6Zx.jpg" alt="" />
            </div>
                <div className='text-white flex justify-center h-full gap-4 flex-col items-center text-center md:items-end md:text-right absolute top-10 right-30'>
                    <p className='text-2xl sm:text-3xl md:text-4xl font-semibold'>30% off sale</p>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Latest Exclusive <br />
                        Summer Collection</h3>
                    <button className='bgp px-5 py-2 rounded-md text-white'>Shop Now</button>

                </div>
            </div>
       
    );
};

export default LatestExclusive;