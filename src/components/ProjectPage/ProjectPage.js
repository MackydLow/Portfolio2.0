import uniqid from 'uniqid'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded'
import { projects } from '../../portfolio'
import './ProjectPage.css'
 
const categoryNames = {
  uni: 'University project',
  cyber: 'Cybersecurity project',
}
 
// lets a field be one paragraph (a string) or several (a list of strings)
const toParagraphs = (text) => (Array.isArray(text) ? text : [text])
 
const imageSrc = (image) =>
  image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/images/${image}`
 
const ProjectPage = ({ slug }) => {
  const index = projects.findIndex((project) => project.slug === slug)
 
  if (index === -1) {
    return (
      <section className='section project-page project-page--missing'>
        <h1 className='project-page__title'>Project not found</h1>
        <p>This project may have been renamed or removed.</p>
        <a href='#projects' className='btn btn--outline'>
          See all projects
        </a>
      </section>
    )
  }
 
  const project = projects[index]
  const nextProject = projects[(index + 1) % projects.length]
  const showNext = projects.length > 1 && nextProject.slug
 
  return (
    <article className='section project-page'>
      <a href='#projects' className='link project-page__back'>
        <ArrowBackRoundedIcon fontSize='small' />
        All projects
      </a>
 
      <header className='project-page__intro'>
        {categoryNames[project.category] && (
          <p className='project-page__category'>
            {categoryNames[project.category]}
          </p>
        )}
 
        <h1 className='project-page__title'>{project.name}</h1>
 
        {(project.subtitle || project.description) && (
          <p className='project-page__subtitle'>
            {project.subtitle || project.description}
          </p>
        )}
      </header>
 
      {project.image && (
        <img
          src={imageSrc(project.image)}
          alt={`${project.name} screenshot`}
          className='project-page__hero'
        />
      )}
 
      <div className='project-page__layout'>
        <div className='project-page__content'>
          {project.overview && (
            <section className='project-page__block'>
              <h2>Overview</h2>
              {toParagraphs(project.overview).map((paragraph) => (
                <p key={uniqid()}>{paragraph}</p>
              ))}
            </section>
          )}
 
          {project.role && (
            <section className='project-page__block'>
              <h2>My role</h2>
              {toParagraphs(project.role).map((paragraph) => (
                <p key={uniqid()}>{paragraph}</p>
              ))}
            </section>
          )}
 
          {project.skills && (
            <section className='project-page__block'>
              <h2>Skills I developed</h2>
              <dl className='project-page__skills'>
                {project.skills.map((skill) => (
                  <div key={uniqid()} className='project-page__skill'>
                    <dt>{skill.name}</dt>
                    <dd>{skill.detail}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
 
          {project.gallery && (
            <section className='project-page__block'>
              <h2>Screenshots</h2>
              <div className='project-page__gallery'>
                {project.gallery.map((image) => (
                  <img
                    key={uniqid()}
                    src={imageSrc(image)}
                    alt={`${project.name} screenshot`}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
 
        <aside className='project-page__facts'>
          {project.team && (
            <div className='project-page__fact'>
              <h2>Team</h2>
              <p>{project.team}</p>
            </div>
          )}
 
          {project.stack && (
            <div className='project-page__fact'>
              <h2>Built with</h2>
              <ul className='project-page__stack'>
                {project.stack.map((item) => (
                  <li key={uniqid()} className='btn btn--plain'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
 
          {(project.sourceCode || project.livePreview) && (
            <div className='project-page__actions'>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn--outline project-page__button'
                >
                  <GitHubIcon fontSize='small' />
                  View code on GitHub
                </a>
              )}
 
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn--outline project-page__button'
                >
                  <LaunchRoundedIcon fontSize='small' />
                  Live demo
                </a>
              )}
            </div>
          )}
        </aside>
      </div>
 
      <nav className='project-page__nav'>
        <a href='#projects' className='link project-page__nav-link'>
          <ArrowBackRoundedIcon fontSize='small' />
          All projects
        </a>
 
        {showNext && (
          <a
            href={`#/project/${nextProject.slug}`}
            className='link project-page__nav-link project-page__nav-link--next'
          >
            <span>
              <span className='project-page__nav-label'>Next project</span>
              {nextProject.name}
            </span>
            <ArrowForwardRoundedIcon fontSize='small' />
          </a>
        )}
      </nav>
    </article>
  )
}
 
export default ProjectPage