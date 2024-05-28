import React from 'react'
import { FiSearch } from "react-icons/fi";
import BooksListBg from './../assets/img/bookListBg.jpg'
import BookBg from './../assets/img/bookBg.jpeg'


const SearchBooksList = () => {
    return (
        <div className='min-h-screen px-5' style={{backgroundImage:`url(${BooksListBg})`}}>
        
        <form className='flex items-center justify-center pt-5'>
        <div className="flex items-center rounded-l-lg gap-1 bg-[#ffffff] h-[40px] overflow-hidden">
        <label className='py-2 px-3 cursor-pointer bg-[#dfdede] h-full' htmlFor="search"><FiSearch className='w-5 h-5' /></label>
        <input className='h-full outline-none w-[400px] lg:w-[500px] text-[18px] pl-2' id='search' placeholder='Find books' type="text" />
        </div>
        <button type='submit' className='bg-[#dfdede] rounded-r-lg h-[40px] py-2 px-3 text-[18px]'>Go</button>
        </form>
        
        <ul className="mx-auto flex flex-wrap justify-center gap-3 pb-10 pt-6 bg-no-repeat sm:px-5 2xl:px-0" >
        <li className="flex flex-col md:flex-row items-center gap-4 w-[720px] rounded-lg px-[20px] py-[30px] md:p-[30px] bg-bottom" style={{backgroundImage:`url(${BookBg})`}}>
        <img src="https://covers.openlibrary.org/b/id/4626555-M.jpg" alt="book" className='w-[130px] md:w-[145px] lg:h-[185px] h-[170px] rounded-lg' />
        
        <div className="flex flex-col gap-3">
        <div className="font-semibold">
        <h2 className='text-[18px] text-center md:text-start sm:text-[20px] md:text-[22px] lg:text-[24px] mb-1'>All's Well That Ends Well (Arden Shakespeare)</h2>
        <p className='text-center md:text-start sm:text-[18px]'>William Shakespeare • <span>216 pages</span></p>
        </div>
        
        <p className='font-semibold text-green-900 text-center lg:text-start'>PUBLISHED AT: 1984</p>
        
        <button className='w-full h-[35px] bg-blue-600 font-semibold text-white text-[18px] rounded-lg hover:opacity-90 active:opacity-60'>Add to bookshelf</button>
        </div>
        </li>
        <li className="flex flex-col md:flex-row items-center gap-4 w-[720px] rounded-lg px-[20px] py-[30px] md:p-[30px] bg-bottom" style={{backgroundImage:`url(${BookBg})`}}>
        <img src="https://covers.openlibrary.org/b/id/4626555-M.jpg" alt="book" className='w-[130px] md:w-[145px] lg:h-[185px] h-[170px] rounded-lg' />
        
        <div className="flex flex-col gap-3">
        <div className="font-semibold">
        <h2 className='text-[18px] text-center md:text-start sm:text-[20px] md:text-[22px] lg:text-[24px] mb-1'>All's Well That Ends Well (Arden Shakespeare)</h2>
        <p className='text-center md:text-start sm:text-[18px]'>William Shakespeare • <span>216 pages</span></p>
        </div>
        
        <p className='font-semibold text-green-900 text-center lg:text-start'>PUBLISHED AT: 1984</p>
        
        <button className='w-full h-[35px] bg-blue-600 font-semibold text-white text-[18px] rounded-lg hover:opacity-90 active:opacity-60'>Add to bookshelf</button>
        </div>
        </li>
        <li className="flex flex-col md:flex-row items-center gap-4 w-[720px] rounded-lg px-[20px] py-[30px] md:p-[30px] bg-bottom" style={{backgroundImage:`url(${BookBg})`}}>
        <img src="https://covers.openlibrary.org/b/id/4626555-M.jpg" alt="book" className='w-[130px] md:w-[145px] lg:h-[185px] h-[170px] rounded-lg' />
        
        <div className="flex flex-col gap-3">
        <div className="font-semibold">
        <h2 className='text-[18px] text-center md:text-start sm:text-[20px] md:text-[22px] lg:text-[24px] mb-1'>All's Well That Ends Well (Arden Shakespeare)</h2>
        <p className='text-center md:text-start sm:text-[18px]'>William Shakespeare • <span>216 pages</span></p>
        </div>
        
        <p className='font-semibold text-green-900 text-center lg:text-start'>PUBLISHED AT: 1984</p>
        
        <button className='w-full h-[35px] bg-blue-600 font-semibold text-white text-[18px] rounded-lg hover:opacity-90 active:opacity-60'>Add to bookshelf</button>
        </div>
        </li>
        </ul>
        </div>
        )
    }
    
    export default SearchBooksList
    