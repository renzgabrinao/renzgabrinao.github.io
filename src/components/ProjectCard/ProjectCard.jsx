import { Link } from "react-router-dom"
import defaultImg from "../../assets/img/default.jpg"
import "./ProjectCard.css"
// import "../../assets/projects/MovieDB/MovieDB.png"


function ProjectCard({ id, title, description, img }) {
  
  return (
    <Link to={`/projects/${id}`}>
      <div className="project-card">
        <img 
          src={`/projects/${title}/${img}`} 
          alt={`Image for ${title}`} 
          id="project-card-img"
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