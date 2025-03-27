import type { SkillsListWithDescriptions, SkillsList, QuadrantKey, SkillsState } from "./types"

// Comprehensive list of skills by category with descriptions
export const skillsListWithDescriptions: SkillsListWithDescriptions = {
  technical: [
    {
      name: "JavaScript/TypeScript",
      description: "Programming languages for web development, with TypeScript adding static typing to JavaScript.",
    },
    {
      name: "Python",
      description: "Versatile programming language known for readability and extensive libraries.",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces, particularly single-page applications.",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine for server-side programming.",
    },
    {
      name: "SQL",
      description: "Standard language for managing and querying relational databases.",
    },
    {
      name: "AWS",
      description: "Amazon Web Services - cloud computing platform offering various services.",
    },
    {
      name: "Docker",
      description: "Platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "CI/CD",
      description:
        "Continuous Integration and Continuous Deployment - automating build, test, and deployment processes.",
    },
    {
      name: "System Design",
      description: "Process of defining architecture, components, and interfaces for a system to satisfy requirements.",
    },
    {
      name: "Debugging",
      description: "Process of finding and resolving defects in software that prevent correct operation.",
    },
  ],
  management: [
    {
      name: "Team Leadership",
      description: "Ability to guide, motivate, and direct a group toward common goals.",
    },
    {
      name: "Agile Methodologies",
      description:
        "Approach to project management emphasizing flexibility, customer collaboration, and rapid delivery.",
    },
    {
      name: "1:1 Meetings",
      description: "Regular one-on-one meetings with team members to provide feedback, guidance, and support.",
    },
    {
      name: "Performance Reviews",
      description: "Formal assessment of an employee's work performance over a specific period.",
    },
    {
      name: "Conflict Resolution",
      description: "Process of addressing disagreements constructively to reach a mutually acceptable solution.",
    },
    {
      name: "Delegating effectively",
      description: "Assigning responsibilities to team members based on their strengths and development needs.",
    },
    {
      name: "Empowering team members",
      description: "Giving team members authority and resources to make decisions and take ownership.",
    },
    {
      name: "Autonomy-based leadership",
      description: "Leadership style that grants team members freedom to determine how to accomplish their work.",
    },
    {
      name: "Trust-based management",
      description: "Management approach founded on mutual trust rather than control and surveillance.",
    },
    {
      name: "Weekly check-in systems",
      description: "Regular, lightweight meetings to align on progress, priorities, and remove obstacles.",
    },
    {
      name: "Servant leadership",
      description: "Leadership philosophy where the leader's primary goal is to serve and support their team.",
    },
    {
      name: "Coaching over directing",
      description: "Approach that focuses on developing skills through guidance rather than giving direct orders.",
    },
    {
      name: "Results-oriented management",
      description: "Management style focused on outcomes rather than processes or time spent.",
    },
    {
      name: "Adaptive leadership",
      description: "Ability to adapt leadership style to changing circumstances and team needs.",
    },
  ],
  soft: [
    {
      name: "Communication",
      description: "Ability to convey information clearly and effectively in various formats and contexts.",
    },
    {
      name: "Active Listening",
      description: "Fully concentrating on, understanding, and responding thoughtfully to what someone is saying.",
    },
    {
      name: "Empathy",
      description: "Ability to understand and share the feelings of another person.",
    },
    {
      name: "Adaptability",
      description: "Ability to adjust to new conditions or changing requirements quickly and effectively.",
    },
    {
      name: "Problem Solving",
      description: "Process of finding solutions to difficult or complex issues.",
    },
    {
      name: "Time Management",
      description: "Practice of planning and controlling time spent on specific activities to increase efficiency.",
    },
    {
      name: "Mentoring",
      description: "Guiding less experienced individuals to develop their skills and career.",
    },
    {
      name: "Feedback Giving",
      description: "Providing constructive information to help others improve their performance.",
    },
    {
      name: "Resilience",
      description: "Ability to recover quickly from difficulties or adapt well to change and stress.",
    },
    {
      name: "Work-Life Balance",
      description: "Maintaining equilibrium between professional responsibilities and personal life.",
    },
  ],
  nonprofit: [
    {
      name: "Adaptability in changing environments",
      description:
        "Ability to quickly adjust to shifting priorities, limited resources, and evolving needs in nonprofit settings.",
    },
    {
      name: "Resource optimization",
      description: "Making the most of limited resources to achieve maximum impact for the mission.",
    },
    {
      name: "Working with limited budgets",
      description: "Ability to accomplish goals despite financial constraints common in nonprofit organizations.",
    },
    {
      name: "Mission-driven focus",
      description: "Maintaining alignment with organizational purpose rather than profit motives.",
    },
    {
      name: "Stakeholder engagement",
      description:
        "Building relationships with diverse groups including donors, volunteers, beneficiaries, and community members.",
    },
    {
      name: "Volunteer coordination",
      description: "Recruiting, training, and managing volunteers to support organizational goals.",
    },
    {
      name: "Grant writing",
      description:
        "Developing compelling proposals to secure funding from foundations and other grant-making entities.",
    },
    {
      name: "Flexibility in role definition",
      description: "Adapting job responsibilities as needed in organizations with less rigid structures.",
    },
    {
      name: "Wearing multiple hats",
      description: "Taking on various roles and responsibilities beyond formal job description as needed.",
    },
    {
      name: "Grassroots organizing",
      description: "Building community support and engagement from the ground up.",
    },
    {
      name: "Crisis management",
      description: "Responding effectively to unexpected challenges with limited resources.",
    },
    {
      name: "Impact measurement",
      description: "Evaluating and communicating the effectiveness of programs in achieving mission objectives.",
    },
  ],
  domain: [
    {
      name: "Fintech",
      description: "Knowledge of financial technology systems, regulations, and industry practices.",
    },
    {
      name: "Healthcare",
      description: "Understanding of healthcare systems, regulations, and patient care processes.",
    },
    {
      name: "E-commerce",
      description: "Knowledge of online retail operations, payment processing, and customer experience.",
    },
    {
      name: "Education",
      description: "Understanding of learning methodologies, educational systems, and student needs.",
    },
    {
      name: "Gaming",
      description: "Knowledge of game development, player engagement, and gaming platforms.",
    },
    {
      name: "Social Media",
      description: "Understanding of social platforms, content strategy, and community engagement.",
    },
    {
      name: "Enterprise Software",
      description: "Knowledge of business applications, workflows, and organizational needs.",
    },
    {
      name: "Cybersecurity",
      description: "Understanding of security threats, protection mechanisms, and compliance requirements.",
    },
    {
      name: "Data Privacy",
      description: "Knowledge of privacy regulations, data protection practices, and compliance.",
    },
    {
      name: "User Research",
      description: "Methods for understanding user needs, behaviors, and preferences.",
    },
    {
      name: "UX Design",
      description: "Creating intuitive, efficient, and enjoyable user experiences.",
    },
    {
      name: "Analytics",
      description: "Using data to measure performance, identify trends, and inform decisions.",
    },
  ],
  caregiving: [
    {
      name: "Crisis management",
      description:
        "Ability to stay calm and make decisions under pressure during emergencies or high-stress situations.",
    },
    {
      name: "Patience and empathy",
      description:
        "Capacity to understand others' needs and respond with compassion, even in challenging circumstances.",
    },
    {
      name: "Multitasking",
      description: "Managing multiple priorities simultaneously while maintaining attention to detail and quality.",
    },
    {
      name: "Needs assessment",
      description: "Identifying and prioritizing others' requirements, often when they can't articulate them clearly.",
    },
    {
      name: "Emotional intelligence",
      description: "Recognizing, understanding, and managing emotions in yourself and others effectively.",
    },
    {
      name: "Conflict resolution",
      description: "De-escalating tense situations and finding solutions that address underlying needs.",
    },
    {
      name: "Resourcefulness",
      description: "Finding creative solutions with limited resources or in unexpected situations.",
    },
    {
      name: "Advocacy",
      description: "Speaking up for others' needs and navigating complex systems on their behalf.",
    },
    {
      name: "Time management",
      description: "Efficiently organizing competing priorities and making the most of limited time.",
    },
    {
      name: "Adaptability",
      description: "Quickly adjusting to changing circumstances and requirements without losing effectiveness.",
    },
  ],
  adulting: [
    {
      name: "Financial management",
      description: "Budgeting, planning, and making strategic decisions about resource allocation.",
    },
    {
      name: "Negotiation",
      description: "Advocating for your needs while finding mutually beneficial solutions with others.",
    },
    {
      name: "Project planning",
      description: "Breaking down complex tasks (like moving or renovations) into manageable steps with timelines.",
    },
    {
      name: "Vendor management",
      description: "Selecting, coordinating, and evaluating service providers for quality and value.",
    },
    {
      name: "Research skills",
      description: "Finding, evaluating, and applying information to make informed decisions.",
    },
    {
      name: "Preventive maintenance",
      description: "Identifying potential issues before they become problems and taking proactive steps.",
    },
    {
      name: "Documentation",
      description: "Keeping organized records of important information, transactions, and communications.",
    },
    {
      name: "Boundary setting",
      description: "Establishing and maintaining healthy limits in relationships and commitments.",
    },
    {
      name: "Continuous learning",
      description: "Acquiring new skills and knowledge as needed to address changing circumstances.",
    },
    {
      name: "Community building",
      description: "Creating and nurturing networks of mutual support and shared resources.",
    },
  ],
}

// Convert the skills with descriptions to a format compatible with the existing code
export const skillsList: SkillsList = Object.fromEntries(
  Object.entries(skillsListWithDescriptions).map(([category, skills]) => [category, skills.map((skill) => skill.name)]),
)

// Create a lookup map for skill descriptions
export const initialSkillDescriptions = Object.values(skillsListWithDescriptions)
  .flat()
  .reduce<Record<string, string>>((acc, skill) => {
    acc[skill.name] = skill.description
    return acc
  }, {})

// Add custom descriptions for the initial skills that aren't in the skills list
export const customDescriptions: Record<string, string> = {
  "Debugging complex issues": "Ability to identify and resolve intricate technical problems in code or systems.",
  "Mentoring junior developers":
    "Guiding and supporting less experienced developers to grow their skills and confidence.",
  "System architecture design":
    "Creating high-level structure and organization of software systems to meet requirements.",
  "Adapting to changing priorities":
    "Ability to shift focus and adjust work based on evolving business or project needs.",
  "Public speaking": "Presenting information clearly and confidently to groups of various sizes.",
  "Work-life balance": "Maintaining a healthy equilibrium between professional responsibilities and personal life.",
  "Frontend design": "Creating user interfaces that are both visually appealing and functional.",
  "Rigid process enforcement": "Strictly adhering to established procedures without flexibility for context.",
  "Solving technical challenges": "Finding effective solutions to complex technical problems.",
  "Code reviews": "Examining code written by others to improve quality and share knowledge.",
  "Team collaboration": "Working effectively with others to achieve shared goals.",
  "Flexible 'roll with the punches' work environments":
    "Thriving in settings where plans frequently change and adaptability is essential.",
  "Giving people autonomy to grow": "Allowing team members freedom to make decisions and learn from their experiences.",
  "Weekly check-ins with team members": "Regular, structured conversations to provide support and remove obstacles.",
  "The dynamic nature of nonprofit work":
    "Engaging with the varied and evolving challenges common in mission-driven organizations.",
  "Administrative paperwork": "Completing forms, reports, and documentation required for organizational processes.",
  "Meetings without clear agendas": "Participating in discussions that lack defined objectives or structure.",
  "Legacy code maintenance":
    "Working with and improving older codebases that may lack documentation or use outdated technologies.",
  "Micromanaging team members": "Closely controlling and monitoring the work of others rather than empowering them.",
  "Highly structured environments with no flexibility":
    "Working in settings with rigid processes that don't adapt to changing needs.",
}

// Initial skills state
export const initialSkills: SkillsState = {
  goodAt: [
    "Debugging complex issues",
    "Mentoring junior developers",
    "System architecture design",
    "Adapting to changing priorities",
  ],
  notGoodAt: ["Public speaking", "Work-life balance", "Frontend design", "Rigid process enforcement"],
  enjoy: [
    "Solving technical challenges",
    "Code reviews",
    "Team collaboration",
    "Flexible 'roll with the punches' work environments",
    "Giving people autonomy to grow",
    "Weekly check-ins with team members",
    "The dynamic nature of nonprofit work",
  ],
  notEnjoy: [
    "Administrative paperwork",
    "Meetings without clear agendas",
    "Legacy code maintenance",
    "Micromanaging team members",
    "Highly structured environments with no flexibility",
  ],
}

// Quadrant labels with emojis
export const quadrantLabels: Record<QuadrantKey, string> = {
  goodAt: "✨ What I'm Good At",
  notGoodAt: "🌱 What I'm Not Yet Good At",
  enjoy: "🎯 What I Enjoy Doing",
  notEnjoy: "⛔ What I Don't Enjoy Doing",
}

// Quadrant descriptions
export const quadrantDescriptions: Record<QuadrantKey, string> = {
  goodAt: "Skills and abilities you've mastered or perform well",
  notGoodAt: "Areas where you need improvement or more experience",
  enjoy: "Tasks and responsibilities that energize you",
  notEnjoy: "Activities that drain your energy or motivation",
}

// Quadrant colors
export const quadrantColors: Record<QuadrantKey, string> = {
  goodAt: "border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20",
  notGoodAt: "border-amber-200 bg-amber-50 dark:bg-amber-950/20",
  enjoy: "border-sky-200 bg-sky-50 dark:bg-sky-950/20",
  notEnjoy: "border-rose-200 bg-rose-50 dark:bg-rose-950/20",
}

// Quadrant gradients
export const quadrantGradients: Record<QuadrantKey, string> = {
  goodAt: "from-emerald-50 to-emerald-100 dark:from-emerald-950/10 dark:to-emerald-950/20",
  notGoodAt: "from-amber-50 to-amber-100 dark:from-amber-950/10 dark:to-amber-950/20",
  enjoy: "from-sky-50 to-sky-100 dark:from-sky-950/10 dark:to-sky-950/20",
  notEnjoy: "from-rose-50 to-rose-100 dark:from-rose-950/10 dark:to-rose-950/20",
}
