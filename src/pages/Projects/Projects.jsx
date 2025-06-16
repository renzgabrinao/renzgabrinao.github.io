import { Link } from 'react-router-dom'
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import projects from "../../assets/projects.json"
import Nav from "../../components/Nav/Nav"
import "./Projects.css"

function Projects() {


  return (
    <>
      <Nav></Nav>
      <div className="projects-page">
        <div className="projects-page-card">
          <div className="projects-page-card-top">
            <Link to='/'> back to homepage</Link>
            <h1>projects</h1>
          </div>
          
          <div className="projects-page-card-list">
            {
              projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  id={project.id} 
                  title={project.title} 
                  description={project.description}
                  img={project.img}
                />
              ))
            }
          </div>
        </div>

      </div>
    </>

  )
}

export default Projects