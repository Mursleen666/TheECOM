import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { data } from 'react-router-dom'
import { toast } from 'react-toastify'

const backEndUrl = import.meta.env.VITE_BACKEND_URL

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { navigate } = useContext(ShopContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")




  const onSubmit = async (event) => {
    const myData = {
      name: name,
      email: email,
      password: password
    }
    const myData2 = {
      email: email,
      password: password
    }

    event.preventDefault();


    if (currentState == "Login") {
      try {
        const response2 = await axios.post(backEndUrl + "/api/user/login", myData2)

        console.log(token)
        if (response2.data.success) {
          setEmail("")
          setPassword("")
          toast.success("Login successfully")
          setToken(response2.data.token);
          localStorage.setItem("token", response2.data.token);

        }
        else {

          toast.error(response2.data.msg)

        }
      } catch (error) {
        console.log(error)
      }

    }

    else {
      try {
        const response = await axios.post(backEndUrl + "/api/user/register", myData)

        if (response.data.success) {
          setName("")
          setEmail("")
          setPassword("")
          toast.success("Registered successfully")
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        }

        else {

          toast.error(response.data.msg)

        }
      } catch (error) {
        console.log(error)
      }
    }
  }


  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>


      {currentState !== 'Login' && (
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />)}


      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === 'Login' && (
          <p className='cursor-pointer  hover:text-gray-500'>Forgot your password?</p>)}
        {
          currentState === 'Login'
            ? <p className='cursor-pointer hover:text-gray-500' onClick={() => setCurrentState('Sign Up')}>Create account</p> :
            <div className='w-full flex justify-end' > <p className='cursor-pointer  hover:text-gray-500' onClick={() => setCurrentState('Login')}>Login Here</p>
            </div>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'sign Up'}</button>

    </form>
  )
}

export default Login
