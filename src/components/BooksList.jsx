import React from 'react'
import BooksListBg from './../assets/img/bookListBg.jpg'
import BookBg from './../assets/img/bookBg.jpeg'

const BooksList = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage:`url(${BooksListBg})`}}>
    <h1 className='text-white text-center text-[24px] sm:text-[28px] md:text-[40px] italic pt-4'>Books on your bookshelf</h1>
    <ul className="mx-auto flex flex-wrap justify-center gap-3 pb-10 pt-6 bg-no-repeat px-5 " >
    <li className="flex flex-col md:flex-row items-center gap-5 w-[720px] rounded-lg px-[20px] py-[30px] md:p-[30px] bg-bottom" style={{backgroundImage:`url(${BookBg})`}}>
    <img src="https://covers.openlibrary.org/b/id/4626555-M.jpg" alt="book" className='w-[130px] md:w-[145px] lg:h-[185px] h-[170px] rounded-lg' />
    
    <div className="flex flex-col gap-4">
    <div className="font-semibold">
    <h2 className='text-[18px] text-center md:text-start sm:text-[20px] md:text-[22px] lg:text-[24px] mb-2'>All's Well That Ends Well (Arden Shakespeare)</h2>
    <p className='text-center md:text-start sm:text-[18px]'>William Shakespeare • <span>216 pages</span></p>
    </div>
    
    <div className="flex gap-3 md:gap-0  flex-col md:flex-row justify-between md:items-end">
    <div className="flex flex-col gap-2 font-semibold">
    <h3 className='text-[18px] py-1 text-green-900 bg-white text-center rounded-xl'>STATUS: 3</h3>
    <button className='w-full md:w-[140px] h-[35px] bg-blue-300 rounded-lg hover:opacity-90 active:opacity-60 text-[17px]'>Change status</button>
    </div>
    
    <button className='w-full md:w-[140px] h-[35px] bg-red-600 font-semibold text-white text-[18px] rounded-lg hover:opacity-90 active:opacity-60'>Delete book</button>
    </div>
    </div>
    </li>
    </ul>
    </div>
    )
  }
  
  export default BooksList
  