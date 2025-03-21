// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "The Atomic-Blog Website",
      description:
        "A modern blog platform featuring a clean interface with post management, search functionality, and dark mode. Implemented with 30 dynamic blog posts, search capabilities, and a user-friendly interface for post creation and archiving.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Prashant2376/starter",
      live: "https://atomic-blog-demo.com",
      image:
        "https://placehold.co/600x400/2a2a4a/ffffff?text=Atomic+Blog&font=roboto",
      featured: true,
      learned: "React Hooks, component-based architecture",
      functionalities: [
        "30 atomic posts management",
        "Advanced search functionality",
        "Post archiving system",
        "Dark mode toggle",
        "Dynamic content with Faker.js",
        "Clean and modern UI",
      ],
    },
    {
      title: "Worldwise React Application",
      description:
        "The main objective of the project is that user can give feedback to any city they visit in the world by fetching city data and using reverse geocoding and form handling.",
      technologies: ["React.js", "React Router", "Context API", "CSS"],
      github: "https://github.com/Prashant2376/worldwise",
      live: "https://worldwise-demo.com",
      image:
        "https://placehold.co/600x400/1a4a5a/ffffff?text=Worldwise&font=roboto",
      featured: true,
      learned: "React Router, Context API, form handling, API integration",
      functionalities: [
        "City data fetching",
        "Reverse geocoding",
        "Form handling",
        "User feedback system",
      ],
    },
    {
      title: "Online Voting System",
      description:
        "Developed a Python voting application facilitating user registration, vote casting, and vote tallying with efficient party-specific results. Used socket programming and a secure server that only allows clients with authentic names and passwords to cast votes.",
      technologies: ["Python", "Socket Programming", "Authentication"],
      github: "https://github.com/Prashant2376/Online-Voting-System-main",
      live: "https://voting-system-demo.com",
      image:
        "https://placehold.co/600x400/2a4a2a/ffffff?text=Voting+System&font=roboto",
      featured: true,
      learned: "Socket programming, secure server implementation",
      functionalities: [
        "User registration",
        "Secure vote casting",
        "Vote tallying",
        "Party-specific results",
        "Authentication system",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Vite, featuring smooth animations, dark/light theme toggle, and dynamic content sections. Implements best practices in web development and modern UI/UX principles.",
      technologies: ["React", "Vite", "Framer Motion", "CSS3"],
      github: "https://github.com/Prashant2376/portfolio",
      live: "https://your-portfolio.com",
      image:
        "https://placehold.co/600x400/4a2a4a/ffffff?text=Portfolio&font=roboto",
      featured: true,
      learned:
        "Modern React development, animation libraries, responsive design",
      functionalities: [
        "Responsive design",
        "Dark/Light theme",
        "Smooth animations",
        "Dynamic content sections",
      ],
    },
    
  ];

  const basicProjects = [
    {
      title: "Eat-N-Split",
      description:
        "A bill splitting application that helps friends calculate and split their restaurant bills easily. Features an intuitive interface for managing expenses.",
      technologies: ["React", "CSS"],
      github: "https://github.com/Prashant2376/eat-n-split",
      image:
        "https://placehold.co/600x400/4a2a6a/ffffff?text=Eat+N+Split&font=roboto",
      functionalities: [
        "Bill amount calculation",
        "Split amount per person",
        "Friend management",
        "Expense tracking",
      ],
      learned: "React forms, state management, mathematical operations",
    },
    {
      title: "Travel Lists",
      description:
        "A travel packing list application that helps users organize and manage their travel items. Features item categorization and checklist functionality.",
      technologies: ["React", "CSS"],
      github: "https://github.com/Prashant2376/travel-lists",
      image:
        "https://placehold.co/600x400/2a6a4a/ffffff?text=Travel+Lists&font=roboto",
      functionalities: [
        "Item management",
        "Checklist functionality",
        "Category organization",
        "Packing status tracking",
      ],
      learned: "React components, state management, local storage",
    },
    {
      title: "Step Project",
      description:
        "A multi-step form application that guides users through a sequence of steps to complete a process. Features progress tracking and form validation.",
      technologies: ["React", "CSS"],
      github: "https://github.com/Prashant2376/step-project",
      image:
        "https://placehold.co/600x400/6a2a2a/ffffff?text=Step+Project&font=roboto",
      functionalities: [
        "Multi-step navigation",
        "Form validation",
        "Progress tracking",
        "Data persistence",
      ],
      learned: "Form handling, step navigation, validation logic",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="projects-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="projects-intro-line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="projects-intro-content">
              <motion.div
                className="projects-count"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {projects.length + basicProjects.length}
                <span>Projects</span>
              </motion.div>
              <motion.div
                className="projects-intro-text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2>Creative Works</h2>
                <p>A curated collection of my development journey</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="projects-intro-line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <h2>Featured Projects</h2>
          <p className="main-description">
            Showcasing my technical expertise and problem-solving abilities
            through innovative solutions
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
              variants={cardVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="functionalities">
                  <h4>Key Features</h4>
                  <ul>
                    {project.functionalities.map((functionality, funcIndex) => (
                      <li key={funcIndex}>{functionality}</li>
                    ))}
                  </ul>
                </div>
                {project.learned && (
                  <div className="learned-section">
                    <h4>What I Learned</h4>
                    <p>{project.learned}</p>
                  </div>
                )}
                <motion.div
                  className="project-cta"
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more"
                  >
                    View on GitHub
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "4rem" }}
        >
          <h2>Basic React Projects</h2>
          <p className="main-description">
            A collection of fundamental React projects showcasing core concepts
            and implementations
          </p>
          <p className="sub-description">
            These projects demonstrate my understanding of React basics and
            state management
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {basicProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links"></div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="functionalities">
                  <h4>Key Features</h4>
                  <ul>
                    {project.functionalities.map((functionality, funcIndex) => (
                      <li key={funcIndex}>{functionality}</li>
                    ))}
                  </ul>
                </div>
                {project.learned && (
                  <div className="learned-section">
                    <h4>What I Learned</h4>
                    <p>{project.learned}</p>
                  </div>
                )}
                <motion.div
                  className="project-cta"
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more"
                  >
                    View on GitHub
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
