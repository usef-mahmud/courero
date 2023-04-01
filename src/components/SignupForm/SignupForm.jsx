import React, {useState, useEffect} from 'react'
import TextBox from '../TextBox/TextBox.jsx'

import './SignupForm.scss'
import { Link } from 'react-router-dom'
const SignupForm = () => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return ( 
    <div className='signup__form'>
      <div className="form">
        <div className="form__title">
          sign up to courero
        </div>
        <div className="form__box">
          <TextBox 
            label='full name'
            value={title}
            setValue={setTitle}
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
          <div className="signup__btn">
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