import React, { useState, useEffect } from 'react'
import TextBox from '../TextBox/TextBox.jsx'

import './SignupForm.scss'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import register from '../../DB/registerUser.js'
const SignupForm = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorMessage = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }

  const signup = async () => {
    if(fullName === ''){
      errorMessage('Please enter your name!')
    }else if(!/\S+@\S+\.\S+/.test(email)){
      errorMessage('Please enter a valid email!')
    }else if(password === ''){
      errorMessage('Please enter your password')
    }else if(password.length < 8){
      errorMessage('Password must be atleast 8 characters')
    }else{
      let res = await register(
        fullName.split(' ')[0],
        fullName.split(' ').length === 1 ? '' : fullName.split(' ')[1],
        email,
        password
      )

      if(await res.error){
        errorMessage(res.message)
      }else{
        window.localStorage.setItem('user_id', res.data.user_id)
        toast.success('we have sent you activation email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        })
        navigate('/')
      }
    }
  }

  return (
    <div className='signup__form'>
      <div className="form">
        <div className="form__title">
          sign up to courero
        </div>
        <div className="form__box">
          <TextBox
            label='full name'
            value={fullName}
            setValue={setFullName}
            type='text'
          />
        </div>
        <div className="form__box">
          <TextBox
            label='email'
            value={email}
            setValue={setEmail}
            type='email'
          />
        </div>
        <div className="form__box">
          <TextBox
            label='password'
            value={password}
            setValue={setPassword}
            type='password'
          />
        </div>

        <div className="form__button">
          <div className="signup__btn" onClick={signup}>
            Sign up
          </div>
          <div className="login__link">
            Already on courero? <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm