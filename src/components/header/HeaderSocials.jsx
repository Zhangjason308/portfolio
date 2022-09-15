import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jason-zhang-457393223/" ><BsLinkedin/></a>
        <a href="https://github.com/Zhangjason308" ><AiFillGithub/></a>
        
    </div>
  )
}

export default HeaderSocials