import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page</title>
        <meta name="description" content="404 - Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='flex justify-center items-center h-[498px]'>
            <div className='text-center dark:text-gray-300 text-gray-700 font-semibold flex flex-col gap-3'>
                <h1 className='text-blue-600 text-9xl font-bold'>404</h1>
                <p>ooopppsss Sayfa Bulunamadı Silinmiş yada Taşınmış Olabilir</p>
                <Link href="/" className='bg-sky-900 px-4 py-2 hover:bg-sky-500 transition-colors dark:text-gray-300 text-white'>AnaSayfa</Link>
            </div>
        </div>
    </>
  )
}
