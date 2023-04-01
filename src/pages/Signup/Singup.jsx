import React from 'react'
import Header from '../../components/Header/Header'

import './Signup.scss'
const Singup = () => {
  return (
    <div className='signup-page'>
        <Header />
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