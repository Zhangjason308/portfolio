import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Project from './components/project/Project'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience/>
        <Project/>
        <Contact />
        <Footer/>
    </>
  )
}

export default App