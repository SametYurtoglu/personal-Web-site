import Image from 'next/image'
import React from 'react'

const MyPCardsItem = ({title,desc,avatar,link}) => {
    return(
        <div className='bg-transparent w-[330px] h-[400px] rounded-lg hover:-translate-y-5 hover:shadow-2xl duration-500 hover:scale-105 '>
        <div>
            <div className="bg-projebg relative w-full rounded-t-lg h-[180px] bg-center bg-cover">
                <Image alt='' src={avatar} fill/>
                <div className="flex justify-end px-3 ">
                    <h1 className='text-violet-700 font-bold animate-pulse bg-black bg-opacity-40 px-2 rounded-lg'>Projects</h1>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center px-5 py-2'>
                <h1 className='dark:text-gray-400 font-bold text-xl'>{title}</h1>
                <p className='w-[270px] dark:text-gray-400 font-normal text-[15px] text-center'>{desc}</p>
                <div className='flex justify-center '>
                <a href={link} className='bg-blue-600/10 px-10 py-1 rounded-lg hover:bg-blue-600/30 dark:text-gray-400 font-medium uppercase'>İncele</a>
            </div>
            </div>
           
        </div>
    </div>  
    )
}

const MyPCards = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
        <MyPCardsItem avatar='/images/pb-logo.jpg' title='PlusBot' desc='Gelişmiş Discord Bot' link='#'/>
    </div>
  )
}

export default MyPCards