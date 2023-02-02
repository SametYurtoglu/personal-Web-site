import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai'
import {FaMicroblog} from 'react-icons/fa'
import {SiNounproject} from 'react-icons/si'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page</title>
        <meta name="description" content="404 - Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div className='flex justify-center items-center h-[498px]'>
            <div className='text-center dark:text-gray-300 text-gray-700 font-semibold flex flex-col gap-3'>
                <h1 className='text-blue-600 text-9xl font-bold'>404</h1>
                <p>ooopppsss Sayfa Bulunamadı Silinmiş yada Taşınmış Olabilir</p>
                <Link href="/" className='bg-sky-900 px-4 py-2 hover:bg-sky-500 transition-colors dark:text-gray-300 text-white'>AnaSayfa</Link>
                {/* <div className='flex gap-5 justify-center'>
                    <button className='border border-gray-600 py-8 px-12 hover:bg-gray-600 transition-all duration-300 flex items-center gap-3'><AiOutlineHome className='text-xl'/>Home</button>
                    <button className='border border-gray-600 py-8 px-12 hover:bg-gray-600 transition-all duration-300 flex items-center gap-3'><SiNounproject className='text-3xl'/>Projects</button>
                    <button className='border border-gray-600 py-8 px-12 hover:bg-gray-600 transition-all duration-300 flex items-center gap-3'><AiOutlineShopping className='text-xl'/>Shop</button>
                    <button className='border border-gray-600 py-8 px-12 hover:bg-gray-600 transition-all duration-300 flex items-center gap-3'><FaMicroblog className='text-xl'/>Blog</button>
                </div> */}
            </div>
        </div>
      <Footer/>
    </>
  )
}
