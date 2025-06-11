// import images
import defaultImg from "../../assets/img/default.jpg"
import sfuLogo from '../../assets/img/logos/sfu-logo.png'
import bcitLogo from '../../assets/img/logos/bcit-logo.png'
import langaraLogo from '../../assets/img/logos/langara-logo.png'
import linkedinLogo from '../../assets/img/logos/linkedin-logo.svg'
import githubLogo from '../../assets/img/logos/github-logo.svg'
import projects from '../../assets/projects.json'


import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Nav from '../../components/Nav/Nav'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  // console.log(projects)
  return (
    <>
      <Nav></Nav>
      <div className="main">        
        <div className='bio'>
          <div className='facecard'>
            <img 
              src={defaultImg}
              alt="Portrait of me" 
              id='portrait'
            />
            <div className='socials'>
              <Link><img src={linkedinLogo} alt="LinkedIn Logo" id='linkedin'/></Link>
              <Link><img src={githubLogo} alt="GitHub Logo" id='github'/></Link>
            </div>
          </div>
          
          <div className='bio-text'>
            <h2>hi, i'm renz gabrinao</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deleniti reiciendis enim inventore eum voluptatem magni quidem voluptatibus sapiente eligendi ea, culpa corrupti vero suscipit excepturi? Et dolorem ratione inventore.</p>
          </div>
        </div>  {/*------------------- END bio ---------------------*/}

        <div className='featured-projects'>
          <div className='featured-projects-top'>
            <h1>projects</h1>
            <Link to='/projects'>see all projects</Link>
          </div>
          <div className='featured-projects-cards'>
            <ProjectCard key={projects[0].id} id={projects[0].id} title={projects[0].title} description={projects[0].description} />
            <ProjectCard key={projects[1].id} id={projects[1].id} title={projects[1].title} description={projects[1].description} />
            <ProjectCard key={projects[2].id} id={projects[2].id} title={projects[2].title} description={projects[2].description} />
          </div>

        </div>  {/*------------------- END featured-projects ---------------------*/}
        
        <div className='education'>
          <div className='education-top'>
            <h1>education</h1>
            <Link to='/resume'>see my resume</Link>
          </div>
          <div className='education-details'>
            <div className='sfu'>
              <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer">
                <img src={sfuLogo} alt="SFU Logo" id='sfu-logo'/>
              </a>
              <div>
                <p>simon fraser university</p>
                <p>cognitive science</p>
                <p>2025 - </p>
                <p>burnaby, b.c.</p>
                <p>canada</p>
                <p>&nbsp;</p>
              </div>
            </div>
            <div className='bcit'>
              <a href="https://www.bcit.ca" target="_blank" rel="noopener noreferrer">
                <img src={bcitLogo} alt="BCIT Logo" id='bcit-logo'/>
              </a>
              <div>
                <p>british columbia institute of technology</p>
                <p>software systems developer</p>
                <p>certificate</p>
                <p>2022 - 2023</p>
                <p>vancouver, b.c.</p>
                <p>canada</p>
              </div>
            </div>
            <div className='langara'>
              <a href="https://www.langara.ca" target="_blank" rel="noopener noreferrer">
                <img src={langaraLogo} alt="Langara Logo" id='langara-logo'/>
              </a>
              <div>
                <p>langara college</p>
                <p>computer science</p>
                <p>2018 - 2024</p>
                <p>vancouver, b.c.</p>
                <p>canada</p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>  {/*------------------- END education ---------------------*/}
      </div>  {/*------------------- END main ---------------------*/}
    </>
  )
}

export default Home