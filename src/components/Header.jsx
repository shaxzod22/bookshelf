import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";
import bookShelfHeaderBg from './../assets/img/woodenBg.png'
import BookShelf from './../assets/img/Bookshelf.png'

const Header = () => {
  const {pathname} = useLocation()

  return (
    <header className='bg-cover' style={{backgroundImage:`url(${bookShelfHeaderBg})`}}>
    <div className="max-w-[1240px] w-full flex items-center justify-between mx-auto p-2 ">
    <Link to='/'>
    <img className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full' src={BookShelf} alt="Logo" />
    </Link>

    
    <div className="flex items-center gap-7 sm:gap-10">
    <Link to={pathname == '/'?'/search':'/'} className='flex bg-green-400 py-[4px] sm:py-[6px] px-4 sm:px-6 rounded-lg sm:text-[18px] hover:opacity-80 active:opacity-60 font-semibold'>
    {pathname == '/'?'Discover books':'Go to bookshelf'}
    </Link>
    
    <button className='hover:opacity-80 active:opacity-60'>
    <IoLogOutOutline className='w-8 h-8' />
    </button>
    </div>
    </div>
    </header>
    )
  }
  
  export default Header
  