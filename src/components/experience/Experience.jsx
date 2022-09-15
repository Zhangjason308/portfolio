import React from 'react'
import './Experience.css'
import {BsCheckSquareFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have...</h5>
      <h2>Languages</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>HTML</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>CSS</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>JavaScript</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>React</h4></div>
            </article>
            
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Python</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Java</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>C</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Node</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>SQL</h4></div>
            </article>
          </div>
        </div>
      </div>

      <h5>My Co-op placements...</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Software Developer</h3>
          <div className="work__experience__content">
            <article className='work__experience__details'>
              <div><h4>Curtiss-Wright Defense Solutions | May 2022 - Aug 2022</h4></div>
              <div><h5>Developed a Python test automation script to test flagship SBC that was undergone a new software release candidate for RedHat 8.4 </h5></div>
            </article>
            
            
          </div>
        </div>
        </div>
      
      
    </section>
  )
}

export default Experience