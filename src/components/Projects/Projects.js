import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
 
// Each group becomes its own titled row of cards.
// A project appears in a group when its `category` matches.
const groups = [
  { title: 'University Projects', category: 'uni' },
  { title: 'Cybersecurity Projects', category: 'cyber' },
]
 
const Projects = () => {
  if (!projects.length) return null
 
  return (
    <section id='projects' className='section projects'>
      {groups.map(({ title, category }) => {
        const groupProjects = projects.filter(
          (project) => project.category === category
        )
 
        if (!groupProjects.length) return null
 
        return (
          <div key={category} className='projects__group'>
            <h2 className='section__title'>{title}</h2>
 
            <div className='projects__grid'>
              {groupProjects.map((project) => (
                <ProjectContainer key={uniqid()} project={project} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
 
export default Projects
