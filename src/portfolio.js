const header = {
  homepage: 'https://mackydlow.github.io/Portfolio2.0',
  title: 'ML.',
}

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
  // category: 'uni' puts a card under University Projects
  // category: 'cyber' puts a card under Cybersecurity Projects
  // delete livePreview or image lines if a project doesn't have one
 
  // ---- University Projects ----
  {
    name: 'Social Media Website',
    description: `A fake social media website built with HTML, CSS and JavaScript.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',
    category: 'uni',
  },
  {
    name: 'Uni Project 2',
    description: `One or two sentences on what it does and what you learnt.`,
    stack: ['Java'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',
    category: 'uni',
  },
  {
    name: 'Uni Project 3',
    description: `One or two sentences on what it does and what you learnt.`,
    stack: ['C'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',category: 'uni',
  },
 
  // ---- Cybersecurity Projects ----
  {
    name: 'Cyber Project 1',
    description: `One or two sentences on what it does and what you learnt.`,
    stack: ['Python', 'Kali Linux'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',
    category: 'cyber',
  },
  {
    name: 'Cyber Project 2',
    description: `One or two sentences on what it does and what you learnt.`,
    stack: ['Python'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',
    category: 'cyber',
  },
  {
    name: 'Cyber Project 3',
    description: `One or two sentences on what it does and what you learnt.`,
    stack: ['Linux'],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    image: 'social-media.png',
    category: 'cyber',
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
