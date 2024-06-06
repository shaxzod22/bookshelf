import React, { useState } from 'react'
import CryptoJS from 'crypto-js';
import { FiSearch } from "react-icons/fi";
import BooksListBg from './../assets/img/bookListBg.jpg'
import BookBg from './../assets/img/bookBg.jpeg'


const SearchBooksList = () => {
    const [data,setData] = useState('')
    const [loading,setLoading] = useState(false)
    
    const handleSubmitSearch = async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            let searchQuery = e.target.searchQuery.value.trim()
            let response = await fetch(`https://no23.lavina.tech/books/${searchQuery}`,{
            method:"GET",
            headers:{
                Key: "mana2",
                Sign: CryptoJS.MD5(`GET/books/${searchQuery}secret`).toString()
            }
        })
        let {data} = await response.json()
        console.log(data);
        setData(data)
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false)
    }
}

const handlePost = async (code)=>{
   
    try {
        setLoading(true)
        let response = await fetch(`https://no23.lavina.tech/books`, {
        method:"POST",
        body: JSON.stringify({
            "isbn": code
        }),
        headers:{
            'Content-Type': 'application/json',
            Key: "mana2",
            Sign: CryptoJS.MD5(`POST/books{isbn:"${code}"}secret`).toString()
        }
    })
    let result  = await response.json()
    console.log(result);
} catch (error) {
    console.log(error);
}finally{
    setLoading(false)
}
}


if(loading){
    return (
        <div className='w-full h-screen bg-slate-300 flex items-center justify-center'>
        <span className="loader"></span>
        </div>
        )
    }
    
    return (
        <div className='min-h-screen px-5' style={{backgroundImage:`url(${BooksListBg})`}}>
        
        <form onSubmit={(e)=>handleSubmitSearch(e)} className='flex items-center justify-center pt-5'>
        <div className="flex items-center rounded-l-lg gap-1 bg-[#ffffff] h-[40px] overflow-hidden">
        <label className='py-2 px-3 cursor-pointer bg-[#dfdede] h-full' htmlFor="search"><FiSearch className='w-5 h-5' /></label>
        <input className='h-full outline-none w-[400px] lg:w-[500px] text-[18px] pl-2' name='searchQuery' id='search' placeholder='Find books' type="text" />
        </div>
        <button type='submit' className='bg-[#dfdede] rounded-r-lg h-[40px] py-2 px-3 text-[18px]'>Go</button>
        </form>
        
        <ul className="mx-auto flex flex-wrap justify-center gap-3 pb-10 pt-6 bg-no-repeat sm:px-5 2xl:px-0" >
        {data?data.slice(0,10).map((book,index)=>(
            <li key={index} className="flex flex-col md:flex-row items-center gap-4 w-[720px] rounded-lg px-[20px] py-[30px] md:p-[30px] bg-bottom" style={{backgroundImage:`url(${BookBg})`}}>
            <img src={book.cover} alt="book" className='w-[130px] md:w-[145px] lg:h-[185px] h-[170px] rounded-lg' />
            
            <div className="flex flex-col gap-3 flex-grow">
            <div className="font-semibold">
            <h2 className='text-[18px] text-center md:text-start sm:text-[20px] md:text-[22px] lg:text-[24px] mb-1'>{book?.title}</h2>
            <p className='text-center md:text-start sm:text-[18px]'>{book?.author}</p>
            </div>
            
            <p className='font-semibold text-green-900 text-center lg:text-start'>PUBLISHED: {book?.published} {book?.isbn}</p>
            
            <button onClick={()=>handlePost(book?.isbn)} className='w-full h-[35px] bg-blue-600 font-semibold text-white text-[18px] rounded-lg hover:opacity-90 active:opacity-60'>Add to bookshelf</button>
            </div>
            </li>
            )):''}
            
            </ul>
            </div>
            )
        }
        
        export default SearchBooksList
        