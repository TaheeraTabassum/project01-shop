import React from 'react'

export default function ({text}) {
  return (
    <div>
        <button className='px-4 py-2 text-white rounded-md bg-[#5CAF90] flex items-center hover:scale-110 transition-all hover:duration-500 cursor-pointer'>{text}</button>
    </div>
  )
}
