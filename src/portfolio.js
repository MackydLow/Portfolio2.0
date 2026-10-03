const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mack Low',
  role: 'Computing Science Student at University of Dundee',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Hey, I'm Mack! I'm a third-year Computer Science student who loves software, with a growing focus on cybersecurity and AI. I've worked on projects in Java, C, C++, Python, and HTML, and I've used tools like Kali Linux to develop my skills. I'm exploring how systems are attacked and defended, and how AI plays a role on both sides. I'm keen to apply what I've learnt in the real world and keep growing as an engineer.',
  resume: 'https://example.com',
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
      'Hey, I'm Mack! I'm a third-year Computer Science student who loves software, with a growing focus on cybersecurity and AI. I've worked on projects in Java, C, C++, Python, and HTML, and I've used tools like Kali Linux to develop my skills. I'm exploring how systems are attacked and defended, and how AI plays a role on both sides. I'm keen to apply what I've learnt in the real world and keep growing as an engineer.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
