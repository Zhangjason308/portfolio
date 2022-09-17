import React from 'react'
import './Project.css'
import sc from '../../assets/Screen Shot 2022-09-13 at 3.37.48 PM.png'
import sc2 from '../../assets/sorting visualizer.png'

const data = [
  {id: 1, image: sc, title: 'Website Portfolio', github: "https://github.com/Zhangjason308/Zhangjason308.github.io", live: "#"}
  ,{id: 2, image: sc2, title: 'Sorting Algorithm Visualizer', github: "https://github.com/Zhangjason308/sorting-visualizer", live:"https://Zhangjason308.github.io/sorting-visualizer"}
]


const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Personal Projects</h2>

    <div className="container project__container">
      {
        data.map(({id, image, title, github,live}) => {
          return (
            <article key={id} className='project__item'>
            <div className="project__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn btn-primary'>GitHub</a>
            <a href={live} className='btn btn-primary'>Live Demo</a>
          </div>  
          </article>
          )
        })
      }    
    </div>
    </section>
  )
}

export default Project