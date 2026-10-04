const header = {
  homepage: 'https://mackydlow.github.io/Portfolio2.0',
  title: 'ML.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mack Low',
  role: 'Computing Science Student at the University of Dundee',
  picture: 'me.png',

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
    slug: 'ai-training-drone',
    category: 'uni',
    name: 'AI Training Drone',
    description: `A delivery drone that learns the quickest, safest route to a house across a village map.`,
    stack: ['Python', 'PyTorch', 'Gymnasium', 'NumPy'],
    image: 'ai-drone.png',
    team: 'Group project (3 people), University of Dundee',
    subtitle: `An AI delivery drone that learns to find the quickest route to a house in a village grid while avoiding dangerous areas.`,
    overview: [
      `The drone delivers packages across a village built as a 10 × 10 grid. It starts at the warehouse and is given a randomly chosen house to deliver to.`,
      `Using reinforcement learning, the drone practises the delivery thousands of times. Each move costs points, flying through high-wind areas costs more, and houses and the no-fly zone are penalised, so over time it learns the shortest route that avoids dangerous areas.`,
    ],
    role: [
      `With three of us on the project, my main responsibilities were designing the village layout and training the AI.`,
      `For the village, I created the grid map with roads, green spaces, high-wind areas, houses and a no-fly zone, and set the cost of flying over each type of terrain. For the training, I built the loop that runs batches of 30 practice deliveries and updates the model to favour moves that earned higher rewards, using techniques like an entropy bonus and gradient clipping to keep learning stable.`,
      `We split the work evenly, kept each other updated, and merged our code so everything worked as one program.`,
    ],
    skills: [
      {
        name: 'Teamwork',
        detail: `Splitting the work, keeping each other updated, and merging our code into one working program.`,
      },
      {
        name: 'Reinforcement learning',
        detail: `Training an AI agent with rewards and penalties, and tuning the training so it learned reliably.`,
      },
      {
        name: 'Problem solving',
        detail: `Designing a reward system that pushes the drone towards short, safe routes instead of just any route.`,
      },
    ],
    sourceCode:
      'https://github.com/MackydLow/Introduction-to-AI/tree/main/final-project',
  },
  {
    slug: 'java-project',
    category: 'uni',
    name: 'Social Networking App',
    description: `A Java social networking app where users add friends, write posts and like each other's posts.`,
    stack: ['Java', 'Eclipse', 'Git', 'GitHub'],
    image: 'java.png',
    team: 'Pair project, University of Dundee',
    subtitle: `A social networking application built in Java, where users connect with friends and share Twitter-style posts.`,
    overview: [
      `Users can add friends, browse their friends' friend lists to find new people, and remove friends at any time. They can view their own friends list and every post they've made.`,
      `Each friend comes with automatically generated posts, which users can browse and like, with every post showing its author, date and number of likes. Friends can also be filtered by hometown or workplace, and the friends list can be saved to and loaded from a file.`,
    ],
    role: [
      `With only two of us on the project, we both covered a lot of ground. My main responsibility was posts: letting users create, like and delete them. I built this with two classes, a node class that stores each post and a class that creates and manages posts using those nodes.`,
      `Once our parts were working, my partner and I merged our code and built the main file together. This is where the user interacts with the program, and it calls all of the other classes.`,
    ],
    skills: [
      {
        name: 'Teamwork',
        detail: `Splitting the work, keeping each other updated, and merging our code into one working program.`,
      },
      {
        name: 'Critical thinking',
        detail: `Breaking the problem down and designing how posts are stored and linked together.`,
      },
      {
        name: 'Adaptability',
        detail: `When half of our original group couldn't contribute, we re-planned the work so the two of us could still deliver everything.`,
      },
    ],
    sourceCode:
      'https://github.com/MackydLow/Java-FinalProject-Social-Networking-application',
  },
  {
    slug: 'movie-recommendation-platform',
    category: 'uni',
    name: 'Movie Recommendation Platform',
    description: `A movie website where users can search films, build a watchlist and leave reviews, powered by a Python backend.`,
    stack: ['Python', 'FastAPI', 'MySQL', 'AWS', 'JavaScript', 'pytest'],
    image: 'Movie.png',
    team: 'Group project (4 people), University of Dundee',
    subtitle: `A full-stack movie platform where users create an account, search for films, save them to a watchlist and write reviews.`,
    overview: [
      `Users register and log in, then search for any film using live data from The Movie Database (TMDB), including details like the plot, release year and cast. They can save films to a personal watchlist and leave star ratings and reviews, while admins can remove reviews.`,
      `The backend is a Python API connected to a MySQL database hosted on AWS, with an HTML, CSS and JavaScript frontend. Personalised recommendations were still in progress when the project deadline arrived, so the current version suggests films from a fixed search.`,
    ],
    role: [
      `I was the main backend developer. I built the API in FastAPI, including the routes for registering, logging in, searching films, viewing movie details and cast, adding to a watchlist, posting reviews, and an admin-only route for deleting reviews.`,
      `I connected the API to TMDB with error handling for timeouts and failed requests, and set up the MySQL database on AWS, including the code that creates the users, watchlist and reviews tables when the server starts.`,
      `I also connected the frontend to the backend, writing the shared JavaScript that sends each user's login token with their requests, and wrote tests with pytest that use a mocked database to check registering and logging in.`,
    ],
    skills: [
      {
        name: 'Backend development',
        detail: `Designing and building a REST API, and connecting it to a database, an external API and a frontend.`,
      },
      {
        name: 'Security fundamentals',
        detail: `Hashing passwords with Argon2, using JWT tokens to keep users logged in, restricting admin routes by role, and using parameterised SQL queries to protect against SQL injection.`,
      },
      {
        name: 'Cloud and databases',
        detail: `Hosting a MySQL database on AWS and managing it within the limited budget of a student account.`,
      },
      {
        name: 'Teamwork',
        detail: `Integrating my backend with work from three teammates, and resolving the issues that came up when joining the frontend and backend together.`,
      },
    ],
    sourceCode: 'https://github.com/Callanshort8/Movie-Recommendation-Platform-',
  },
 
  // ---- Cybersecurity Projects ----
  {
  slug: 'flagchain',
  category: 'cyber',
  name: 'FlagChain — CTF Writeup Portfolio',
  description: `A public portfolio of penetration testing writeups across 10+ TryHackMe and HackTheBox machines, each documented as a professional client-style report.`,
  stack: ['Kali Linux', 'Nmap', 'Metasploit', 'Python', 'Bash', 'Git', 'GitHub Pages'],
  image: 'smile.png',
  team: 'Solo project',
  subtitle: `A security portfolio where every practice machine attacked is written up with full methodology, CVSS scoring and MITRE ATT&CK mapping, built and hosted entirely from a self-administered Kali Linux VM.`,
  overview: [
    `Each writeup follows a consistent reconnaissance → enumeration → exploitation → privilege escalation structure, covering web application attacks, Windows exploitation, SMB/NFS chaining, and steganography. Machines included a ProFTPD mod_copy exploit chained with an SMB information leak to steal an SSH key (Kenobi), the EternalBlue/MS17-010 SMBv1 remote code execution exploit against a Windows Server target (Blue), a time-based blind SQL injection against an outdated CMS (Simple CTF), and a broken client-side authentication scheme bypassed by forging a session cookie, chained into a root-owned cron job hijack via a world-writable /etc/hosts (Overpass).`,
    `The whole environment was self-administered: a Kali Linux VM run under UTM on Apple Silicon, bridged onto the home network for file transfer, with OpenVPN tunnels into each platform's isolated lab network. The portfolio itself is a Jekyll-themed static site on GitHub Pages, built from Markdown writeups with embedded screenshots as evidence for every stage of each exploit.`,
  ],
  role: [
    `I ran every stage of every engagement personally — port scanning and service enumeration with Nmap, directory brute-forcing with Gobuster, credential attacks with Hydra, and exploitation using a mix of public exploit scripts, Metasploit modules, and manual techniques (PHP upload filter bypasses, SQL injection, cookie forgery, PATH-variable hijacking for privilege escalation).`,
    `I diagnosed and fixed real infrastructure problems along the way: an ISP content filter silently corrupting package downloads (fixed by switching Kali mirrors), VPN interface naming collisions, and a GitHub Pages table-rendering bug eventually traced to a build/cache delay rather than a markdown syntax error.`,
    `I wrote every report from scratch, mapping each vulnerability to its CWE classification, a CVSS severity score, and the specific MITRE ATT&CK technique it corresponds to, with concrete, actionable remediation advice for each finding rather than generic security boilerplate.`,
  ],
  skills: [
    {
      name: 'Penetration testing',
      detail: `Reconnaissance, enumeration, and exploitation across web applications, Windows services, SMB/NFS, and steganography, using Nmap, Gobuster, Metasploit, Hydra, and manual exploitation techniques.`,
    },
    {
      name: 'Vulnerability reporting',
      detail: `Writing findings with CVSS scoring, CWE classification, and MITRE ATT&CK technique mapping, structured the way a real client-facing pentest report is written.`,
    },
    {
      name: 'Linux administration',
      detail: `Managing a self-hosted Kali Linux VM including networking modes, VPN tunnel management, file permissions, SUID/cron-based privilege escalation paths, and package management across an ISP-level filtering issue.`,
    },
    {
      name: 'Version control and static site deployment',
      detail: `Managing the portfolio in Git, resolving real merge conflicts between local and remote history, and deploying it as a themed static site via GitHub Pages and Jekyll.`,
    },
  ],
  sourceCode: 'https://github.com/MackydLow/flagchain',
},
{
  slug: 'redsentry',
  category: 'cyber',
  name: 'RedSentry — Full-Cycle Security Lab',
  description: `A six-phase hands-on security lab covering penetration testing, IDS rule writing, digital forensics, malware analysis, and AI-assisted reporting, run entirely across two isolated VMs.`,
  stack: ['Kali Linux', 'Metasploitable2', 'Metasploit', 'Suricata', 'Elasticsearch', 'Kibana', 'Filebeat', 'Autopsy', 'Ghidra', 'Python', 'Claude API'],
  image: 'machine.png',
  team: 'Solo project',
  subtitle: `A full-cycle security engineering lab moving from offence to defence to forensics to AI-assisted reporting, with every failure diagnosed, fixed, and documented rather than hidden.`,
  overview: [
    `RedSentry moved through six phases against an intentionally vulnerable Metasploitable2 target, isolated inside a UTM host-only network with no route to the internet or home network. Phase one confirmed and exploited real CVEs — the vsftpd 2.3.4 backdoor (CVE-2011-2523), the UnrealIRCd backdoor (CVE-2010-2075), and SQL/command injection in DVWA — while a Samba vulnerability was correctly identified but left labelled as unconfirmed since it was never actually fired.`,
    `Phase two wrote and live-tested 8 custom Suricata IDS rules against those same attacks, piped through Filebeat into Elasticsearch and Kibana for SIEM-style querying. One rule never fired despite the underlying exploit succeeding — diagnosed as a genuine detection gap (the rule inspected the HTTP URI, but the vulnerable endpoint only accepted its payload via POST body) rather than dismissed as a bug. Later phases covered disk forensics with Autopsy (including building a synthetic ext4 image by hand when Autopsy refused loose evidence files), static and dynamic malware analysis with Ghidra and strace on a self-authored sample, and a Python pipeline that calls the Claude API to draft pentest reports, followed by manual review that caught a mismatched CVSS vector and a finding the AI had understated.`,
  ],
  role: [
    `I ran every offensive and defensive stage personally: exploiting each vulnerability with Metasploit and manual techniques, then switching roles entirely to write the Suricata detection rules that would catch those same attacks, each mapped to a MITRE ATT&CK technique.`,
    `I diagnosed detection failures methodically rather than guessing — for example, testing a vulnerable endpoint with an equivalent GET request to isolate whether a failed Suricata rule was a scoping problem or a pattern-matching problem. I applied the same discipline to a cross-compiled malware sample that failed to run on the target four separate times, eliminating architecture, kernel bitness, glibc version, and ABI mismatches one at a time until it ran natively compiled on the target itself.`,
    `I built and debugged the AI reporting pipeline in Python, fixing a content-block parsing bug, a token-limit truncation issue, and a severity-matching bug, then manually reviewed every AI-generated finding against the underlying evidence — catching a case where a confirmed root compromise had been written up as "unconfirmed" and a CVSS score that didn't mathematically match its own vector string.`,
  ],
  skills: [
    {
      name: 'Offensive security',
      detail: `Exploiting real CVEs (vsftpd, UnrealIRCd, SQL/command injection) with Metasploit and manual techniques against an isolated vulnerable target.`,
    },
    {
      name: 'Detection engineering',
      detail: `Writing and live-testing custom Suricata IDS rules, piped through Filebeat into an Elasticsearch/Kibana SIEM pipeline, including correctly diagnosing a genuine detection blind spot rather than treating it as a bug.`,
    },
    {
      name: 'Digital forensics and malware analysis',
      detail: `Manual evidence collection, Autopsy disk analysis including building a synthetic disk image when the standard workflow didn't apply, and static/dynamic analysis of a self-authored malware sample with Ghidra and strace.`,
    },
    {
      name: 'AI-assisted tooling with human review',
      detail: `Building a Python pipeline around the Claude API to draft security reports, then critically reviewing its output against the underlying evidence to catch inaccuracies the AI itself didn't flag.`,
    },
  ],
  sourceCode: 'https://github.com/MackydLow/redsentry',
},
{
  slug: 'project-sentinel',
  category: 'cyber',
  name: 'Project Sentinel — Home SOC',
  description: `A home Security Operations Centre built on the Elastic Stack, ingesting and analysing logs to detect simulated attacks the way a real SOC analyst would.`,
  stack: ['Kali Linux', 'Elasticsearch', 'Kibana', 'Filebeat', 'Auditbeat', 'Metricbeat', 'Suricata', 'Atomic Red Team', 'UFW', 'Hydra', 'Nmap'],
  image: 'home-soc.png',
  team: 'Solo project',
  subtitle: `A fully self-built SOC replicating what a real analyst does day to day — ingesting logs at scale, writing detection rules, simulating attacks safely, and investigating the resulting alerts.`,
  overview: [
    `Project Sentinel runs the full Elastic Stack (Elasticsearch, Kibana, Filebeat, Auditbeat, Metricbeat) on a hardened Kali Linux VM, built with defence-in-depth from the ground up: a dedicated least-privilege analyst account, a UFW firewall exposing only SSH and Kibana, and a network isolation policy switching between internet access for installs and a fully air-gapped host-only mode for every attack simulation and detection test.`,
    `Custom detection rules were written in Kibana's Security app and mapped to specific MITRE ATT&CK techniques, then validated by actually running the attacks they were meant to catch — SSH brute forcing with Hydra, port scanning with Nmap, and simulated reverse shell activity — all contained to localhost inside the isolated VM. Several rules failed to fire on the first attempt for genuinely different reasons each time, each one diagnosed by inspecting the raw indexed data directly in Elasticsearch rather than guessing at the fix.`,
  ],
  role: [
    `I built the entire stack from a bare Kali Linux install: hardening the system first (static hostname, least-privilege analyst user, firewall rules), then installing and configuring Elasticsearch, Kibana, and the Beats agents, including working through X-Pack security setup, encryption key generation, and authenticated Beats output configuration.`,
    `I wrote and debugged every detection rule myself. The SSH brute-force rule alone required three separate fixes — a structured field that didn't actually exist in the indexed data, a log message format specific to Kali's OpenSSH build rather than Debian's, and Filebeat silently failing to ship logs at all after security was enabled. I diagnosed each by querying Elasticsearch directly with curl and reading the raw documents rather than assuming.`,
    `I ran every attack simulation myself, entirely confined to the VM's isolated host-only network or localhost, and built a four-panel Kibana dashboard (event volume, failed login trend, top source IPs, alert severity) to review the results the way an analyst would triage incoming alerts.`,
  ],
  skills: [
    {
      name: 'SIEM and log analysis at scale',
      detail: `Deploying and configuring the Elastic Stack (Elasticsearch, Kibana, Filebeat, Auditbeat, Metricbeat) to ingest, parse, and query tens of thousands of log events.`,
    },
    {
      name: 'Detection engineering',
      detail: `Writing custom SIEM detection rules mapped to MITRE ATT&CK techniques, and systematically diagnosing why several rules failed to fire by inspecting raw indexed data rather than guessing.`,
    },
    {
      name: 'System hardening and defence-in-depth',
      detail: `Applying least-privilege account design, firewall rules, and strict network isolation (switching between internet-connected and fully air-gapped VM modes) so that every attack simulation stayed fully contained.`,
    },
    {
      name: 'Safe attack simulation',
      detail: `Running SSH brute-force, port scanning, and reverse shell simulations against localhost inside an isolated VM to generate real detection data without any risk to the host network.`,
    },
  ],
  sourceCode: 'https://github.com/MackydLow/Project-Sentinel',
},
]

const skills = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'PyTorch',
  'FastAPI',
  'MySQL',
  'Kali Linux',
  'Nmap',
  'Metasploit',
  'Suricata',
  'Elasticsearch',
  'Kibana',
  'Git',
  'GitHub',
]

const contact = {
  email: '2636498@dundee.ac.uk',
}

export { header, about, projects, skills, contact }
