
import useData from '../Hooks/useData';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';
import Btn from './Btn';

const SingleProductPage = () => {
    const { id } = useParams()
    const { products } = useData()
    const findProducts = products.find(p => p.id == id)
    return (
        <div>
            <div>
                <div className='flex items-center gap-8 my-12 justify-center'>
                    <img className='w-120 rounded-md' src={findProducts?.image} alt="" />
                    <div>
                        <p className=' text-[#5CAF90]'>{findProducts?.category}</p>
                        <h3 className='text-4xl font-semibold  text-[#5CAF90]'>{findProducts?.title}</h3>
                        <div className='flex items-center gap-12'>

                            <div className='flex gap-1 py-2 text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className=' text-[#5CAF90]'>Total Rating : {findProducts?.rating}</p>
                            </div>

                        </div>
                        <div className='flex gap-4 text-2xl  text-[#5CAF90] '>
                            <p>Price : $ {findProducts?.price}</p>
                            <p className='line-through text-gray-400'>$ {findProducts?.oldPrice}</p>
                        </div>
                        <div>
                            <p className=' text-[#5CAF90] mb-4'>{findProducts?.description}</p>
                          
                            <p className='font-semibold  text-[#5CAF90]'>Stock: <span className='font-normal text-gray-600'>{findProducts?.stock}</span></p>
                            <p className='font-semibold  text-[#5CAF90]'>type <span className='font-normal text-gray-600'>{findProducts?.type}</span></p>
                        </div>

                        <div className='flex gap-2 items-center  text-[#5CAF90]'>
                            <p className='font-semibold mr-3 my-4'>Size : <span className='font-normal'>{findProducts?.sizes}</span> </p>
                         
                        </div>
                        <div className='flex gap-2 my-4'>
                            <div className='flex gap-4  text-[#5CAF90] border border-gray-200 px-8 py-2 rounded-md'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <div>
                               <Btn text="Add To Cart"></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-24'>
                <SectionHeading heading={"Top Rted"} colorHeading={"Seleing Products"} discription={"High-quality denim jeans for men with a comfortable"}></SectionHeading>
                <div className='grid grid-cols-5 my-12 gap-8'>
                    {
                        products.slice(0,5).map(p => <ProductCard product={p}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;