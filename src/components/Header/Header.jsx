import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/kiru.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kirubel Kinfe</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="person">
          <img src={Me} alt="person pic" style={{ width: "315px", height: "500px"}} />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header