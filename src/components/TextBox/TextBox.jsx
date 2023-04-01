import React, { useEffect, useState } from 'react'
import {HiOutlineEyeSlash, HiOutlineEye} from 'react-icons/hi2'

import './TextBox.scss'
const TextBox = ({ setValue, value, label, type }) => {
  const [inputType, setInputType] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  useEffect(() => {
    setInputType(type)
  }, [type])
  return (
    <div className='text-box'>
      <input
        type={inputType !== 'password' ? inputType : isPasswordVisible ? 'text' : 'password'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <span className={`box__label ${isFocused || value !== '' ? 'active' : ''}`}>{label}</span>
      <span 
        className="show__pass"
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {
          inputType === 'password' ?
          value !== '' ?
          isPasswordVisible ? <HiOutlineEyeSlash /> : <HiOutlineEye /> : '' : ''
        }
      </span>
    </div>
  )
}

export default TextBox