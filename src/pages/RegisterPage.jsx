import React from 'react'
import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import bookShelfBg from './../assets/img/bookshelfBg.jpg'


const RegisterPage = () => {
    const form = useForm({
        defaultValues:{
            name:"",
            email:"",
            key:"",
            secret:"",
        },
    })
    const [hasLoading,setHasLoading] = useState(false)
    const {register, handleSubmit, formState} = form
    const {errors} = formState
    const navigate = useNavigate()
    
    
    const onSignup = async (data)=>{
        try {
            setHasLoading(true)
            let response = await fetch("https://no23.lavina.tech/signup",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            }
        })
        console.log(response);
        
        let result = await response.json()
        console.log(result);
        if(result.isOk){
            localStorage.setItem("user-info",JSON.stringify(result))
            navigate('/')
        }else{
            alert(result?.message)
        }
    } catch (error) {
        console.error(error);
    }finally{
        setHasLoading(false)
    }
    
}
if(hasLoading){
    return (
        <div className='w-full h-screen bg-slate-300 flex items-center justify-center'>
        <span class="loader"></span>
        </div>
        )
    }
    
    return (
        <div className='bg-cover bg-no-repeat flex items-center justify-center h-screen overflow-hidden ' style={{backgroundImage:`url(${bookShelfBg})`}}>
        <div className="bg-[rgba(255,255,255)] flex flex-col items-center rounded-xl p-6 pb-8 max-w-[400px]">
        <h1 className='text-[30px] mb-3 font-bold'>Register</h1>
        
        <form className='w-[220px] sm:w-[260px] md:w-[350px]' onSubmit={handleSubmit(onSignup)} noValidate>
        <Stack spacing={2}>
        <TextField 
        label='Name' 
        type='text' 
        {...register("name",{required:"Name is required",})}
        error={!!errors.name}
        helperText={errors.name?.message}
        />
        
        <TextField
        
        label='Email' 
        type='email' 
        {...register("email",{required:"Email is required",})}
        error={!!errors.email}
        helperText={errors.email?.message}
        />
        
        <TextField
        
        label='Key' 
        type='text' 
        {...register("key",{required:"Key is required",})}
        error={!!errors.key}
        helperText={errors.key?.message}
        />
        
        <TextField
        
        label='Secret' 
        type='password' 
        {...register("secret",{required:"Secret is required",})}
        error={!!errors.secret}
        helperText={errors.secret?.message}
        />
        
        <Button type='submit' color='primary' variant='contained'>
        Register
        </Button>
        </Stack>
        </form>
        </div>
        </div>
        )
    }
    
    export default RegisterPage
    