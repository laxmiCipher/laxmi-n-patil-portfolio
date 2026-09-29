import { Project, SkillCategory, ContactInfo } from '../types';

export const personalInfo: ContactInfo = {
  name: 'Laxmi N Patil',
  email: 'laxmipatil88392@gmail.com',
  phone: '9591860810',
  linkedIn: 'linkedin.com/in/laxmi-patil-471b88368',
  linkedInUrl: 'https://linkedin.com/in/laxmi-patil-471b88368',
  github: 'github.com/4al24cs113-boop/Portfolio',
  githubUrl: 'https://github.com/4al24cs113-boop/Portfolio',
  location: 'Karnataka, India',
  expectedGraduation: '2028',
  cgpa: '8.5 / 10',
  college: "Alva's Institute of Engineering and Technology (AIET)",
  degree: 'Bachelor of Engineering (B.E.) – Computer Science and Engineering',
  careerInterest: 'Java Full Stack Development',
};

export const careerObjective =
  'Computer Science and Engineering student with a strong interest in software development and problem solving. Experienced and practicing across Java and Python development, web technologies, database management, and problem solving. Aiming to build a successful career in Java Full Stack Development by continuously strengthening Data Structures and Algorithms using Java and building practical software projects.';

export const currentFocus = [
  {
    title: 'Java Full Stack Development',
    description: 'Object-oriented programming, JSP web architecture, backend logic, and MySQL database integration.',
    icon: 'Code2',
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Algorithmic problem solving in Java, time & space complexity optimization, and coding logic.',
    icon: 'Binary',
  },
  {
    title: 'Practical Project Development',
    description: 'Building practical solutions across Java and Python demonstrating data handling and modular design.',
    icon: 'Layers',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    description: 'Core object-oriented and systems programming languages',
    skills: [
      {
        name: 'Java',
        description: 'Core OOP, Collections, Exception Handling, JSP Web Tier',
        icon: 'Coffee',
        highlight: true,
      },
      {
        name: 'C',
        description: 'Pointers, Memory Management, Procedural Logic & Fundamentals',
        icon: 'Cpu',
      },
      {
        name: 'Python',
        description: 'Data handling, scripting logic, and practical programming fundamentals',
        icon: 'Terminal',
        highlight: true,
      },
    ],
  },
  {
    category: 'Web',
    description: 'Frontend markup and modern responsive styling foundation',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic HTML5 structure, forms, and web layout elements',
        icon: 'Globe',
      },
      {
        name: 'CSS',
        description: 'Responsive styling, Flexbox, Grid, and user interface aesthetics',
        icon: 'Palette',
      },
    ],
  },
  {
    category: 'Database',
    description: 'Relational data modeling, querying, and storage management',
    skills: [
      {
        name: 'MySQL',
        description: 'Relational schemas, SQL queries, CRUD operations, joins, and data integrity',
        icon: 'Database',
        highlight: true,
      },
    ],
  },
  {
    category: 'Problem Solving',
    description: 'Algorithmic design and analytical thinking in Java',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        description: 'Arrays, Linked Lists, Stacks, Queues, Searching, Sorting, and logical problem solving',
        icon: 'Boxes',
        highlight: true,
      },
    ],
  },
  {
    category: 'Version Control',
    description: 'Source code management and project version tracking',
    skills: [
      {
        name: 'Git',
        description: 'Repository management, commits, branching, and version tracking',
        icon: 'GitBranch',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'student-mark-management-system',
    title: 'Student Mark Management System',
    category: 'Academic Project',
    badge: 'Academic Project',
    technologies: ['Java', 'JSP', 'MySQL'],
    description: 'Developed a system to manage student examination marks.',
    features: [
      'Add marks',
      'Update marks',
      'Delete marks',
      'Display marks',
      'Generate reports based on students and subjects',
      'MySQL data management',
    ],
    architectureOverview:
      'Engineered with a modular Java/JSP architecture connected to a relational MySQL database schema. The system allows educators and administrators to perform reliable CRUD operations and compute aggregate reports for academic performance tracking.',
    databaseSchema: [
      'Students Table (Student_ID, Name, Roll_No, Branch, Semester)',
      'Subjects Table (Subject_ID, Subject_Code, Subject_Name, Max_Marks)',
      'Marks Table (Mark_ID, Student_ID, Subject_ID, Marks_Obtained, Grade)',
    ],
    highlights: [
      'Add, update, delete, and display student marks records',
      'Subject-wise and student-wise examination reporting',
      'Structured MySQL relational database persistence',
    ],
    uiMockupType: 'marks',
    // Easily add project repository or demo links here when available:
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    category: 'Academic Project',
    badge: 'Academic Project',
    technologies: ['Java', 'JSP', 'MySQL', 'HTML', 'CSS'],
    description: 'Developed a web application providing career guidance to students.',
    features: [
      'Student registration',
      'Student login',
      'Career recommendation',
      'Student information storage using MySQL',
    ],
    architectureOverview:
      'Designed to assist students in discovering optimal academic and career pathways. The web tier utilizes Java and JSP with responsive HTML/CSS user interfaces, interfacing with MySQL to persist candidate profiles and career recommendations.',
    databaseSchema: [
      'Users Table (User_ID, Full_Name, Email, Password_Hash, Target_Domain)',
      'Assessments Table (Assessment_ID, User_ID, Skill_Scores, Career_Interests)',
      'Recommendations Table (Rec_ID, Career_Track, Suggested_Roadmap, Key_Skills)',
    ],
    highlights: [
      'Student registration and authenticated login workflow',
      'Skill-based career recommendations and guidance pathways',
      'Student information storage and retrieval using MySQL',
    ],
    uiMockupType: 'career',
    // Easily add project repository or demo links here when available:
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'ride-log',
    title: 'Ride Log',
    category: 'Python Mini Project',
    badge: 'Python Mini Project',
    technologies: ['Python'],
    description: 'Developed a Python mini project called Ride Log.',
    features: [
      'Ride records and trip information tracking',
      'Travel logging and structured data organization',
      'Python programming logic and data handling',
      'Demonstrates programming and problem-solving fundamentals',
    ],
    architectureOverview:
      'A practical Python project designed for logging trip details and managing ride records. Implements clean data handling routines, structured computation logic, and practical Python problem solving for travel activity logging.',
    highlights: [
      'Structured ride record and travel logging routines',
      'Practical Python data manipulation and control flow',
      'Clean modular programming structure and logic flow',
    ],
    uiMockupType: 'ride',
    // Easily add project repository or demo links here when available:
    githubUrl: undefined,
    liveUrl: undefined,
  },
];

export const problemSolvingHighlights = [
  {
    title: 'DSA Practice in Java',
    tag: 'Algorithms & Data Structures',
    description: 'Practicing Data Structures and Algorithms using Java, focusing on linear and non-linear data structures.',
    points: ['Arrays & Strings', 'Linked Lists', 'Searching & Sorting', 'Stacks & Queues'],
  },
  {
    title: 'Logical Thinking & Problem Solving',
    tag: 'Analytical Approach',
    description: 'Solving programming problems to improve logical thinking, edge case handling, and coding skills.',
    points: ['Step-by-step logic design', 'Algorithm complexity analysis', 'Clean, readable Java syntax', 'Modular problem breakdown'],
  },
  {
    title: 'Continuous Skill Development',
    tag: 'Growth Mindset',
    description: 'Continuously developing algorithmic problem-solving skills through hands-on coding and structured learning.',
    points: ['Regular daily coding practice', 'Pattern recognition in problems', 'Iterative solution optimization', 'Test-driven debugging'],
  },
];
