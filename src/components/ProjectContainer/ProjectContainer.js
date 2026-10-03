import uniqid from 'uniqid'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
 
const ProjectContainer = ({ project }) => {
  const hasDetailsPage = Boolean(project.slug)
  const hasSourceCode = Boolean(project.sourceCode)
 
  const openSourceCode = () => {
    window.open(project.sourceCode, '_blank', 'noopener,noreferrer')
  }
 
  // lets keyboard users open the card with Enter, like a normal link
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') openSourceCode()
  }
 
  const cardBody = (
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
    </>
  )
 
  // 1. has a slug: the whole card opens the project's own page
  if (hasDetailsPage) {
    return (
      <a
        href={`#/project/${project.slug}`}
        className='project project--clickable'
      >
        {cardBody}
        <div className='project__footer'>
          <span className='project__cta'>
            View project
            <ArrowForwardRoundedIcon fontSize='small' />
          </span>
        </div>
      </a>
    )
  }
 
  const livePreviewLink = project.livePreview && (
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
  )
 
  // 2. no slug but a GitHub link: the whole card opens the repo
  if (hasSourceCode) {
    return (
      <div
        className='project project--clickable'
        onClick={openSourceCode}
        onKeyDown={handleKeyDown}
        role='link'
        tabIndex={0}
        aria-label={`${project.name} on GitHub`}
      >
        {cardBody}
        <div className='project__footer'>
          <span className='project__cta'>
            <GitHubIcon fontSize='small' />
            View code on GitHub
          </span>
          {livePreviewLink}
        </div>
      </div>
    )
  }
 
  // 3. neither: a normal card
  return (
    <div className='project'>
      {cardBody}
      {livePreviewLink && (
        <div className='project__footer'>{livePreviewLink}</div>
      )}
    </div>
  )
}
 
export default ProjectContainer