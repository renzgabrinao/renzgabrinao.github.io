import { useParams } from "react-router-dom"
import projects from "../../assets/projects.json"
import defaultImg from "../../assets/img/default.jpg"


function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="project-details">
      <img 
        src={defaultImg} 
        alt={`Project image for ${projects[id].title}`}   
      />
      <article>
        <h1>{projects[id].title}</h1>
        <p>{projects[id].description}</p>
      </article>
    </div>
  )
}

export default ProjectDetails