import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useTheme } from "next-themes";
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

const Header = () => {
  useEffect(() => {
      setMounted(true)
  }, [])
  
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme == 'system' ? systemTheme : theme;

    if(currentTheme == 'dark'){
      return(
        <BsFillSunFill className="w-7 h-7 duration-300" role={'button'} onClick={() => setTheme('light')}/>
      )
    }else{
      return(
        <BsFillMoonFill className="w-7 h-7 duration-300" role={'button'} onClick={() => setTheme('dark')}/>
      )
    }
  }
  const router = useRouter()
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={`${navOpen && " pt-[2rem] "} sm:p-0 transition-all`}>
      <nav
        className={`dark:bg-transparent  dark:text-gray-300   w-full h-28 lg:h-28 flex items-center justify-between container mx-auto px-10 border-b-2 border-gray-500 dark:border-gray-400 transition-all `}
      >
        <div>
           <h1 className='dark:text-gray-300 text-gray-700 text-3xl'>NotFounds</h1>
        </div>
        <div
          className={`${
            navOpen && " !top-[0px] "
          }grid place-content-center p-4 min-h-[2rem] w-full sm:w-auto  transition-all sm:bg-transparent sm:static absolute left-0 -top-full border-b-2 sm:border-0 border-gray-700`}
        >
          <ul className={`gap-5 dark:text-gray-300 text-gray-700 flex !text-[16px] sm:text-lg items-center`}>
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

       

        <div className="flex gap-4">
          <button
            className={`outline-none duration-700 text-2xl opacity-0 invisible absolute  right-20 ${
              navOpen && " rotate-[360deg]  !opacity-100 !visible"
            } sm:hidden block cursor-pointer `}
            onClick={() => setNavOpen(!navOpen)}
          >
            <AiOutlineClose />
          </button>

          <button
            className={`outline-none absolute right-20 duration-700 block opacity-100 visible  sm:hidden ${navOpen && " !opacity-0  !invisible "}`}
            onClick={() => {
              setNavOpen(!navOpen);
              console.log(navOpen);
            }}
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
          {renderThemeChanger()}
        </div>
      </nav>
    </div>
  );
};
export default Header;
