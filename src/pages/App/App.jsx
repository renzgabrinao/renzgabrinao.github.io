import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Resume from '../Resume/Resume'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path='/resume' element={<Resume />}/>
    </Routes>
  )
}

export default App
