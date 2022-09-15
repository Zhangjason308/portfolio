import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => (
  <header>
    <div className="container header__container">
      
      <h2>Hello, I'm</h2>
      <h1>JASON ZHANG</h1>
      <h3 className="text-light">Software Developer</h3>
      <CTA />
      <HeaderSocials/>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>

  </header>
)

export default Header