import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
 
const ProjectContainer = ({ project }) => {
  const isClickable = Boolean(project.sourceCode)
 
  const openSourceCode = () => {
    window.open(project.sourceCode, '_blank', 'noopener,noreferrer')
  }
 
  // lets keyboard users open the card with Enter, like a normal link
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') openSourceCode()
  }
 
  const content = (
    <>
      {project.image && (
        <img
          src={
            project.image.startsWith('http')
              ? project.image
              : `${process.env.PUBLIC_URL}/images/${project.image}`
          }
          alt={`${project.name} screenshot`}
          className='project__image'
        />
      )}
 
      <h3>{project.name}</h3>
 
      <p className='project__description'>{project.description}</p>
 
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
 
      <div className='project__footer'>
        {isClickable && (
          <span className='project__cta'>
            <GitHubIcon fontSize='small' />
            View code on GitHub
          </span>
        )}
 
        {project.livePreview && (
          <a
            href={project.livePreview}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='live preview'
            className='link link--icon'
            onClick={(event) => event.stopPropagation()}
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </>
  )
 
  // no GitHub link: a normal, non-clickable card
  if (!isClickable) return <div className='project'>{content}</div>
 
  // GitHub link: the whole card opens the repo
  return (
    <div
      className='project project--clickable'
      onClick={openSourceCode}
      onKeyDown={handleKeyDown}
      role='link'
      tabIndex={0}
      aria-label={`${project.name} on GitHub`}
    >
      {content}
    </div>
  )
}
 
export default ProjectContainer