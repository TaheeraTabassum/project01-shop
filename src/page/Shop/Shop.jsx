import React, { useState} from 'react';
import useData from '../../Hooks/useData';
import ProductCard from '../../shared/ProductCard';


const Shop = () => {
    const { products, categorys } = useData();
    const [width, setWidth] = useState(null);
    const [categoryId, setCategoryId] = useState()
const handleId = (id)=>{
  setCategoryId(id)
}
const handleType = (type)=>{
  setWidth(type)
}

    const filterData = products.filter(p => {
        const matchCategory = categoryId ? p.id === categoryId : true;
        const matchWidth = width ? p.type === width : true;
        return matchCategory && matchWidth;
    }) ;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-12'>

                <div className='md:col-span-3'>
                    <div className='border border-gray-200 p-3 rounded-md'>


                        <p className='border-b border-gray-200 pb-3 mb-4 font-semibold text-lg'>Category</p>
                        {
                            categorys.map(category => (
                                <div key={category.id} className='flex gap-2 items-center mb-2'>
                                    <input
                                        type="checkbox"
                                        checked={categoryId === category.id}
                                        readOnly
                                        onClick={() => handleId(category.id)}
                                    />
                                    <p
                                        className='cursor-pointer select-none'
                                        onClick={() => handleId(category.id)}
                                    >
                                        {category.name}
                                    </p>
                                </div>
                            ))
                        }


                        <div className='mt-12'>
                            <p className='border-b border-gray-200 pb-3 mb-4 font-semibold text-lg'>type</p>
                            {
                                [...new Set(products.map(p => p.type))].map(w => (
                                    <div key={w} className='flex gap-2 items-center mb-2'>
                                        <input
                                            type="checkbox"
                                            checked={width === w}
                                            readOnly
                                            onClick={() => handleType(w)}
                                        />
                                        <p
                                            onClick={() => handleType(w)}
                                            className='cursor-pointer select-none'
                                        >
                                            {w}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>


                        
                    </div>
                </div>


                <div className='md:col-span-9'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {filterData.length > 0 ? (
                            filterData.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className='col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 mt-10'>No products found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;