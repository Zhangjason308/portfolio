import React from 'react'
import './Experience.css'
import {BsCheckSquareFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have...</h5>
      <h2>Languages / Frameworks/ Tools</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>React</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Ember</h4></div>
            </article>            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>TypeScript</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>JavaScript</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>HTML</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>CSS</h4></div>
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
              <div><h4>PostgreSQL</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>AWS</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Docker</h4></div>
            </article>
            <article className='experience__details'>
              <BsCheckSquareFill className='experience__details-icons'/>
              <div><h4>Kubernetes</h4></div>
            </article>
          </div>
        </div>
      </div>

      <h5>My Co-op placements...</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Backend Developer</h3>
          <div className="work__experience__content">
            <article className='work__experience__details'>
              <div><h3>Ciena Corporation | Sept 2023 - Dec 2023</h3></div>
              <div><h4>• Fixed 20+ bugs using AWS SDK/Java to improve the user interface of the SaaS platform app</h4>
<h4>• Updated SaaS ingress using AWS services(S3, ECS, RDS) to adhere to OWASP rules and minimize security risks</h4>
<h4>• Optimized capture update speeds in the SaaS dashboard grid by adding a notification service and lowering the
polling task intervals, reducing the loading time from &gt;60s to &lt;30s</h4></div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
        <h3>Frontend Developer</h3>
          <div className="work__experience__content">
            <article className='work__experience__details'>
              <div><h3>Ciena Corporation | Jan 2023 - Sept 2023</h3></div>
              <div><h4>• Launched 5 major features as a lead UI developer using Ember, Typescript and HTML/CSS to enhance the
interface for the MCP Audit app </h4>
<h4>• Developed new app components such as tooltips, interactive dialogs, and grids based on customer feedback, while
increasing scalalibilty to other MCP apps, and future modifications</h4>
<h4>• Designed unit and integration tests using Ember and Percy to compare visual snapshots of code changes</h4>
<h4>• Fixed 20+ critical/gating bugs related to customer concerns of the functionality or performance on the Audit app</h4>
<h4>• Interacted with developers, QA testers, and customers through scrum meetings, implementation discussions, and
code reviews to make important decisions on optimizing the features </h4></div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
        <h3>Software Developer</h3>
          <div className="work__experience__content">
            <article className='work__experience__details'>
              <div><h3>Curtiss-Wright Defense Solutions | May 2022 - Aug 2022</h3></div>
              <div><h4>• Upgraded Python test automation scripts to improve functionality and scalability towards 20+ SBCs, resulting in
earlier software release dates for customers</h4>
<h4>• Conducted over 150 software tests in U-BOOT and RHEL to verify speed and performance of new releases</h4>
<h4>• Used corporate Atlassian tools such as JIRA, Bitbucket, Confluence, and Agile to document workflow of the
software development lifecycle of 3 flagship projects</h4></div>
            </article>
          </div>
        </div>
      </div>
      
      
      
    </section>
  )
}

export default Experience