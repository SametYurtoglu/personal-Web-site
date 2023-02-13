import MyPCards from '@/components/Cards/MyPCards'
import React from 'react'

const projects = () => {
  return (
    <div className=''>
        <div className='bg-gray-700 w-full h-[6rem] flex items-center '>
            <div className="container mx-auto">
            <h1 className='text-4xl font-bold text-blue-600'>Projects</h1>
            </div>
        </div>
        <div className="flex justify-center flex-col items-center h-full gap-10 mt-10">
            <h1>Projects</h1>
            <div className="">
                 <MyPCards/>
            </div>
        </div>
    </div>
  )
}

export default projects