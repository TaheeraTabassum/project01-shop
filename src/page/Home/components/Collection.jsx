
import { Link } from 'react-router';

const Collection = () => {
    return (
        <div>
            <div className='container md:mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex  justify-center gap-8 my-24'>
             <div className=' relative'>
                  <img src="https://sakib-ecommerce-react-router.netlify.app/assets/12-ytEU1d9X.jpg" alt="" />
                    <div className="absolute right-5 top-5">
                         <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Women's <br /> Collection</h3>
                  <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                    </div>
             </div>
              <div className=' relative'>
                <img src="https://sakib-ecommerce-react-router.netlify.app/assets/13-BixKb9Zl.jpg" alt="" />
                    <div className="absolute right-5 top-5">
                        <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Children's <br /> Collection</h3>
                    <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                    </div>
               </div>
              <div className=' relative'>
                  <img src="https://sakib-ecommerce-react-router.netlify.app/assets/14-CYJPCf3B.jpg" alt="" />
                  <div className="absolute right-5 top-5">
                      <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Men's <br /> Collection</h3>
                    <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                  </div>
              </div>
                </div>
            </div>
    
    );
};

export default Collection;