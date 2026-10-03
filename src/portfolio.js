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
    `I am a third-year Computing Science student at the University of Dundee with a strong interest in software development, problem solving, and emerging technologies, particularly cybersecurity and AI. I have always been curious about how computers and applications work behind the scenes, and through university and personal projects I have built practical experience in Java, C, C++, Python, and web development, as well as working in Linux environments and using tools such as Kali Linux to explore how systems are attacked and defended. I am now seeking an internship where I can apply these skills within an agile team, contribute to real products, and learn from experienced engineers.`,
  resume: 'https://mackydlow.github.io/Portfolio2.0/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mack-low-a6180a366',
    github: 'https://github.com/MackydLow?tab=repositories',
  },
}

const projects = [
  // HOW EACH PROJECT WORKS
  // Card (home page):  name, description, stack, image, category
  // Project page:      slug, subtitle, overview, role, team, skills, gallery,
  //                    sourceCode, livePreview
  // slug = the page address, lowercase-with-dashes, different for every project
  // category: 'uni' or 'cyber' decides which section the card appears in
  // Every field is optional except name and slug. Delete any you don't need.
  // Use backticks ` ` around text so apostrophes (I'm, didn't) are safe.
 
  // ---- University Projects ----
  {
    slug: 'social-media-website',
    category: 'uni',
    name: 'Social Media Website',
    description: `A Java social network where users add friends, write posts and like each other's posts.`,
    stack: ['Java', 'Eclipse', 'GitHub', 'macOS'],
    image: 'social-media.png',
    team: 'Pair project, University of Dundee',
    subtitle: `A Java social network where users add friends, write posts and like each other's posts.`,
    overview: [
      `Users can add friends, browse their friends' friend lists to find new people, and remove friends at any time. They can view their own friends list and every post they've made.`,
      `Posting works like Twitter: a text box for writing a post and a like button. Friends can like each other's posts, and users can view or delete their own.`,
    ],
    role: [
      `With only two of us on the project, we both covered a lot of ground. My main responsibility was posts: creating, liking and deleting them. I built this with two classes, a node class that stores each post and a class that creates and manages posts using those nodes.`,
      `Once our parts were working, my partner and I merged our code and built the main file together. This is where the user interacts with the program, and it calls all of the other classes.`,
    ],
    skills: [
      {
        name: 'Teamwork',
        detail: `Splitting the work, keeping each other updated, and merging our code into one working program.`,
      },
      {
        name: 'Problem solving',
        detail: `Designing how posts are stored and linked, and delivering a working project within a fixed deadline.`,
      },
      {
        name: 'Adaptability',
        detail: `When half of our original group couldn't contribute, we re-planned the work so the two of us could still deliver everything.`,
      },
    ],
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
    // gallery: ['social-media-2.png', 'social-media-3.png'],
  },
  {
    slug: 'uni-project-2',
    category: 'uni',
    name: 'Uni Project 2',
    description: `One sentence about what it does.`,
    stack: ['Java'],
    overview: `What the project does.`,
    role: `What you personally did.`,
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
  },
  {
    slug: 'uni-project-3',
    category: 'uni',
    name: 'Uni Project 3',
    description: `One sentence about what it does.`,
    stack: ['C'],
    overview: `What the project does.`,
    role: `What you personally did.`,
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
  },
 
  // ---- Cybersecurity Projects ----
  {
    slug: 'cyber-project-1',
    category: 'cyber',
    name: 'Cyber Project 1',
    description: `One sentence about what it does.`,
    stack: ['Python', 'Kali Linux'],
    overview: `What the project does.`,
    role: `What you personally did.`,
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
  },
  {
    slug: 'cyber-project-2',
    category: 'cyber',
    name: 'Cyber Project 2',
    description: `One sentence about what it does.`,
    stack: ['Python'],
    overview: `What the project does.`,
    role: `What you personally did.`,
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
  },
  {
    slug: 'cyber-project-3',
    category: 'cyber',
    name: 'Cyber Project 3',
    description: `One sentence about what it does.`,
    stack: ['Linux'],
    overview: `What the project does.`,
    role: `What you personally did.`,
    sourceCode: 'https://github.com/MackydLow/REPO-NAME',
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
