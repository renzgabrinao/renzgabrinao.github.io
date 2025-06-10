import { Link } from "react-router-dom"
import defaultImg from "../../assets/img/default.jpg"


function ProjectCard({ id, title, description, img }) {
  
  return (
    <Link to={`/projects/${id}`}>
      <div className="project-card">
        <img 
          src={defaultImg} 
          alt={`Image for ${title}`} 
        />
        <div className="project-card-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard