import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'


import './Signup.scss'
import { checkUserLoggedIn } from '../../funcs/checkUserLoggedIn'
import SignupForm from '../../components/SignupForm/SignupForm'
const Singup = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    const check = async () => {
      let x = await checkUserLoggedIn()
      await setIsLoggedIn(x)
      if(await x){
        navigate('/')
      }
    }

    check()
  }, [])

  return (

    <div className='signup-page'>
      <Header is_loggedin={isLoggedIn} />
      <div className="singup-page__container">
        <SignupForm />
      </div>
    </div>

  )
}

export default Singup


/**const signup = async () => {
    const res = await register('yousef', 'mahmoud', 'youssef26425@gmail.com', 'pass')

    if(res.error == true){
      console.log(res.message)
    }else{
      console.log('succeed')
    }
  } */