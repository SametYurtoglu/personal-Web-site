import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
  const tarih = new Date()
  const router = useRouter()
  return (
    <div className='dark:bg-gray-800 bg-slate-200 w-full h-[100px] border-t border-gray-500 mt-10'>
        <div className='flex justify-between items-center  px-10 h-full'>
        <div>
        <h1 className='dark:text-gray-400 text-gray-700 text-3xl'>NotFounds</h1>
        </div>
        <div>
            <ul className='flex gap-2 dark:text-gray-300 text-gray-700 font-serif'>
            <li>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === '/' ? 'text-fuchsia-600 underline underline-offset-2' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Projects" legacyBehavior>
            <a className={router.pathname === '/Projects' ? 'text-fuchsia-600 underline underline-offset-2' : ''}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/Blog" legacyBehavior>
            <a className={router.pathname === '/Blog' ? 'text-fuchsia-600 underline underline-offset-2' : ''}>Blog</a>
          </Link>
        </li>

            </ul>
        </div>
        </div>
        <div className='justify-center bg-slate-200 border-t border-gray-500 dark:bg-gray-800 flex items-center h-12'>
            <h1 className='dark:text-gray-200 text-[14px] md:text-lg'>© 2022 - {tarih.getFullYear()} All rights reserved. Made by <a href="https://github.com/SametYurtoglu" className='dark:text-gray-500 text-indigo-600 hover:underline' target={'_blank'} rel='noreferrer'>NotFounds</a></h1>
        </div>
    </div>
  )
}

export default Footer


{/* <h1 className='select-none text-center text-white font-sans'>© 2023 All rights reserved. Made by <a href="https://github.com/SametYurtoglu" className='text-gray-500 hover:underline' target={'_blank'} rel='noreferrer'>NotFounds</a> using <span className='text-fuchsia-500'>NextJS</span> and <span className='text-sky-500'>TailwindCSS</span></h1> */}