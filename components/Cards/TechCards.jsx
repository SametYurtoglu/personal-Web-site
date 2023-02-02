import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3,IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'

const CardsItem = ({title,icon}) => {
    return(
        <div>
        <div className=''>
            <button className='border-[2px] border-gray-500 px-5 py-1 dark:text-white  font-medium flex items-center gap-2 hover:bg-gray-700 text-lg'>{icon} {title}</button>
        </div>
    </div>
    )
}


const TechCards = () => {
  return (
    <div className='flex justify-center md:justify-start flex-wrap gap-5'>
    <CardsItem title='HTML' icon={<AiFillHtml5/>}/>
    <CardsItem title='CSS' icon={<IoLogoCss3/>}/>
    {/* <CardsItem title='TailwindCSS' icon={<SiTailwindcss/>}/> */}
    <CardsItem title='JavaScript' icon={<IoLogoJavascript/>}/>
    {/* <CardsItem title='ReactJS' icon={<FaReact/>}/>
    <CardsItem title='NextJS' icon={<TbBrandNextjs/>}/> */}
    
    
</div>
  )
}

export default TechCards