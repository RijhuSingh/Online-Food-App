import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {
            Array(10).fill("").map((e , index)=><div key={index} className='w-[340px] p-2 h-[300px] m-4 rounded-lg shadow-lg bg-gray-100 ' ></div>)
        }
    </div>
  )
}

export default Shimmer