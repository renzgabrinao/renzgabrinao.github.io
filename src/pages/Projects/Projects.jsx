import ProjectCard from "../../components/ProjectCard/ProjectCard"
import projects from "../../assets/projects.json"
import Nav from "../../components/Nav/Nav"

function Projects() {


  return (
    <>
      <Nav></Nav>
      <div className="projects-page">
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
    </>

  )
}

export default Projects