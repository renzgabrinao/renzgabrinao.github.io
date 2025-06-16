import Nav from "../../components/Nav/Nav"
import { useParams, Link } from "react-router-dom"
import projects from "../../assets/projects.json"
import defaultImg from "../../assets/img/default.jpg"
import "./ProjectDetails.css"


function ProjectDetails() {
  const { id } = useParams();

  return (
    <div class='project-details-page'>
      <Nav></Nav>
      <div className="project-details">
        <Link to="/projects"> back to projects</Link>
        <img 
          src={defaultImg} 
          alt={`Project image for ${projects[id].title}`}   
        />
        <article>
          <h1>{projects[id].title}</h1>
          <p>{projects[id].full_description}</p>
        </article>
      </div>
    </div>

  )
}

export default ProjectDetails