import React, { useRef } from 'react'
import { useState } from 'react'
import LeafBg from './../assets/img/leafBg.png'

const AddBookPage = () => {
  const imageRef = useRef()
  const [urlImg,setUrlImg] = useState('')
  const [isImg, setIsImg] = useState(false)
  const changeImg = ()=>{
    setIsImg(true)
    setUrlImg(URL.createObjectURL(imageRef.current.files[0]))
    console.log(imageRef.current.files[0]);
  }
  return (
    <div className='bg-cover flex items-center justify-center min-h-screen' style={{backgroundImage:`url(${LeafBg})`}}>
    <div className=" py-5 rounded-xl overflow-hidden px-7 add__content__bg text-white border-[2px] border-white">
    <h1 className='text-[30px] font-semibold text-center mb-4'>Add book</h1>
    <div className="flex gap-8">
    <div className="flex flex-col items-center">
    {isImg? <img className='w-[180px] h-[220px] rounded-xl' src={urlImg} alt="" />:<div className='flex items-center justify-center w-[180px] h-[220px] rounded-xl bg-slate-400 text-[20px]'>Image</div>}
    <label className='bg-red-600 flex items-center justify-center mt-4 w-[150px] h-[30px] text-white rounded-lg cursor-pointer font-semibold' htmlFor="select-img">Upload Image</label>
    <input className='hidden' id='select-img' onChange={changeImg} ref={imageRef} type="file" accept="image/png image/jpeg image/jpg" />
    </div>
    
    <div className="">
      <input type="text" placeholder='Enter book name' />
      <div className="flex">
        <input type="text" placeholder='Enter author name' />
        <span>•</span>
        <input type="text" placeholder='Pages' />
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default AddBookPage
  