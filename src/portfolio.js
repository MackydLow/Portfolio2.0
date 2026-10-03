const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mack Low',
  role: 'Computing Science Student at University of Dundee',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    `I am a second year computing science at Dundee University. I am a highly passionate about sofware development, problem solving and newer developing technologies such as AI and cybersecuity. Through projects over the last year I have developed my skills and want to demonstate them out in a agile work enviroment. I’ve always enjoyed Computing Science and been intrigued on how computers and applications run behind the scenes. Through projects over the last year I have learn’t how to use Java, python, c, linux and web development. I am looking for a interships to further devlop my skills and learn from experinced individuals.`,
  resume: 'https://mackydlow.github.io/Portfolio2.0/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mack-low-a6180a366',
    github: 'https://github.com/MackydLow?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      `A fake social media website built with HTML, CSS and JavaScript.`,
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      `Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam`,
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
