import Cards from '@/components/Blog/BlogCards'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'

const Blog = () => {
  return (
    <>
        <Head>
        <title>Samet Yurtoglu | Blog</title>
        <meta name="description" content="my web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/>
        <div className="dark:bg-gray-800 bg-slate-200 w-full h-[100px]">
            <div className="container mx-auto h-full flex items-center">
                <h1 className='text-4xl font-bold dark:text-gray-400 text-gray-700'>Blog</h1>
            </div>
        </div>
        <div className="container mx-auto">
            <div className="mt-16">
                <Cards/>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Blog