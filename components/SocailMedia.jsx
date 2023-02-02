import React from 'react'
import {FiYoutube,FiLinkedin,FiGithub} from 'react-icons/fi'
import {FaDiscord,FaInstagram} from 'react-icons/fa'
import {TfiTwitter} from 'react-icons/tfi'
import Link from 'next/link'


const SocailMedia = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>

        <Link href="https://www.youtube.com/channel/UCardjVN1o3jcb5ec4Iyp39g" target={'_blank'} className='text-red-500 flex items-center gap-1 border-2 border-red-600 py-1 px-3 hover:bg-red-600 hover:text-white duration-300'><FiYoutube className='text-xl'/>Youtube</Link>

        
                          <Link href="https://twitter.com/SametYurtoglu06" target={'_blank'} className='text-sky-500 flex items-center gap-1 border-2 border-sky-600 py-1 px-3 hover:bg-sky-600                        hover:text-white duration-300'><TfiTwitter className='text-xl'/>Twitter</Link>

                          <Link href="#" target={'_blank'} className='text-sky-500 flex items-center gap-1 border-2 border-sky-600 py-1 px-3 hover:bg-sky-600 hover:text-white duration-300'><FiLinkedin className='text-xl'/>Linkedin</Link>

                          <Link href="https://github.com/SametYurtoglu" target={'_blank'} className='text-gray-500 flex items-center gap-1 border-2 border-gray-600 py-1 px-3 hover:bg-gray-600                         hover:text-white duration-300'><FiGithub className='text-xl'/>Github</Link>

                          <Link href="discord.gg/bilgisayar" target={'_blank'} className='text-blue-500 flex items-center gap-1 border-2 border-blue-600 py-1 px-3 hover:bg-blue-600 hover:text-white duration-300'><FaDiscord className='text-xl'/>Discord</Link>

                          <Link href="https://www.instagram.com/sametrx06/" target={'_blank'} className='text-pink-500 flex items-center gap-1 border-2 border-pink-600 py-1 px-3 hover:bg-pink-600 hover:text-white duration-300'><FaInstagram className='text-xl'/>Instagram</Link>
    </div>
  )
}

export default SocailMedia