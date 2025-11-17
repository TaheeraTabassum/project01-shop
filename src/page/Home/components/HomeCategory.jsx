
import { Link } from "react-router";
import useData from "../../../Hooks/useData";



const HomeCategory = () => {
    const {categorys} = useData()


    return (
        <div className='container md:mx-auto px-4 sm:px-2 md:px-12 lg:px-24 mt-24 '>
           <div className=' grid grid-cols-3 md:flex  justify-center gap-4 sm:gap-6 md:gap-12 '>
            {categorys.slice(1,7).map(category=>(
            <Link to="/shop" onClick={() => setCategoryId(category.id)}>
                <div className='flex hover:scale-110 transition-all hover:duration-500 flex-col items-center text-center bg-gray-100 rounded-md px-8 sm:px-12 md:px-8 py-4 '>
                    <img className='w-10 h-10 mb-3' src={category.image} alt="" />
                    <p className='text-gray-600'>{category.name}</p>
                    <p className='text-xs text-gray-400'>{category.items} Items</p>
                </div>
                </Link>
            ))}
           </div>
        </div>
    );
};

export default HomeCategory;