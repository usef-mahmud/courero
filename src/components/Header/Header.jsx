import React, { useEffect, useState } from 'react'
import Logo from '../../assets/imgs/logo.png'
import { GrSearch } from 'react-icons/gr'
import { Link } from 'react-router-dom'

import './Header.scss'
const Header = ({ is_loggedin }) => {

  return (
    <div className='main__header'>
      <div className="header__container">
        <div className="main__section">
          <Link to={'/'} className="header__logo">
            <img src={Logo} alt="" />
          </Link>
          <div className="header__search">
            <div className="search__box">
              <input type="text" placeholder='search for courses' />
              <span className="search__icon">
                <GrSearch />
              </span>
            </div>
          </div>
        </div>
        <div className="user__section">
          {
            is_loggedin ?
            <div>
              LoggedIn
            </div>
            :
            <div className='registering__buttons'>
              <Link to={'/login'} className="login__btn">
                Login
              </Link>
              <Link to={'/signup'} className="signup__btn">
                Signup
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )

}

export default Header