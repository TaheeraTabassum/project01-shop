
import SectionHeading from '../../../../shared/SectionHeading';
import useData from '../../../../Hooks/useData';

import ProductCard from '../../../../shared/ProductCard';
import { useState } from 'react';


const PopularProducts = () => {
    const { categorys, products } = useData()
    const [categoryId, SetCategoryId] = useState("")
    const handleCategoryId = (id) => {
        SetCategoryId(id)
    }
    const filterProduct = categoryId ? products.filter(p=>p.id==categoryId) : products ;
    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24 '>
            <div className='flex flex-wrap justify-between #5CAF90'>
                <div>
                    <SectionHeading heading={"Popular"} colorHeading={"Products"} discription={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
                </div>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-0'>
                   
                    {
                        categorys.map(category => (
                            <div key={category.id}>
                                <p onClick={() => handleCategoryId(category?.id)} className={`cursor-pointer ${categoryId === category.id ? ' text-[#5CAF90] font-bold' : ' text-[#5CAF90]'}`}>{category?.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1  md:pl-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8  mb-4 mt-12'>
                    {filterProduct
                        .map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
                </div>
            </div>

            
        </div>


    );
};

export default PopularProducts;