import React from 'react'
import './About.css'
import ME from '../../assets/IMG_6739.jpg'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className='about__me-image'>
          <img src={ME} alt="Selfie" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward classname='about__icon'/>
            <h5>Experience</h5>
            <small>4 CO-OP terms</small>
            </article>

            <article className='about__card'>
              <FaAward classname='about__icon'/>
            <h5>Skills</h5>
            <small>Frontend Development</small>
            <br></br>
            <small>Backend Development</small>
            </article>

            <article className='about__card'>
              <FaAward classname='about__icon'/>
            <h5>Projects</h5>
            <small>4</small>
            </article>
          </div>

          <p>
            Hi! I'm a third-year software engineering student at Carleton University. Outside of full-stack development, I have many hobbies such as playing volleyball and ultimate, cooking, video games, and also watching anime! 
          </p>

          <p>Please reach out to me for inquiries, or to just talk!</p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>

        
      </div>
    </section>
  )
}

export default About