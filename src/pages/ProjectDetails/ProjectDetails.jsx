import Nav from "../../components/Nav/Nav"
import { useParams, Link } from "react-router-dom"
import projects from "../../assets/projects.json"
import defaultImg from "../../assets/img/default.jpg"
import GithubLogo from '../../assets/img/logos/github-logo.svg?react'
import LinkIcon from '../../assets/img/logos/link-icon.svg?react'
import "./ProjectDetails.css"


function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className='project-details-page'>
      <Nav></Nav>
      <div className="project-details">
        <Link to="/projects"> back to projects</Link>
        <img 
          src={`/projects/${projects[id].title}/${projects[id].img}`}
          alt={`Project image for ${projects[id].title}`}   
        />
        <div className="link-icons">
          {(projects[id].gh_link !== "") && (<a href={projects[id].gh_link} target="_blank" rel="noopener noreferrer"><GithubLogo className="github-icon"/></a>)}
          {(projects[id].web_link !== "") && (<a href={projects[id].web_link} target="_blank" rel="noopener noreferrer"><LinkIcon className="website-icon"/></a>)}
        </div>
        <article>
          <h1>{projects[id].title}</h1>
          <p>{projects[id].full_description}</p>
        </article>
      </div>
    </div>

  )
}

export default ProjectDetails