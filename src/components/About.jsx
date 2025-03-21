// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faCode,
  faLocationDot,
  faIdCard,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faPython,
  faHtml5,
  faCss3,
  faGit,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: faUser },
    { id: "education", label: "Education", icon: faGraduationCap },
    { id: "skills", label: "Tech Stack", icon: faCode },
  ];

  const techStack = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: faReact, level: "Good Knowledge" },
        { name: "JavaScript", icon: faJs, level: "Good Knowledge" },
        { name: "HTML5", icon: faHtml5, level: "Good Knowledge" },
        { name: "CSS3", icon: faCss3, level: "Good Knowledge" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Python", icon: faPython, level: "Good Knowledge" },
        { name: "Node.js", icon: faNode, level: "Yet to Start" },
      ],
    },
    {
      category: "Tools & Version Control",
      techs: [{ name: "Git", icon: faGit, level: "Yet to Start" }],
    },
  ];

  const education = [
    {
      degree: "Bachelors of Engineering",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      period: "2021-2025",
      details: "Computer Science Engineering",
      uid: "21BCS2376",
    },
    {
      degree: "Intermediate (XII)",
      institution: "Surmount International School",
      location: "Gorakhpur, Uttar Pradesh",
      period: "2020",
      percentage: "85.4%",
    },
    {
      degree: "Matriculation (X)",
      institution: "Surmount International School",
      location: "Gorakhpur, Uttar Pradesh",
      period: "2018",
      percentage: "86%",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={tab.icon} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="tab-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "personal" && (
            <motion.div
              className="personal-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="info-grid">
                <div className="info-card">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h3>Birth Place</h3>
                  <p>Gorakhpur, Uttar Pradesh</p>
                </div>
                <div className="info-card">
                  <FontAwesomeIcon icon={faIdCard} />
                  <h3>Student ID</h3>
                  <p>21BCS2376</p>
                </div>
                <div className="info-card">
                  <FontAwesomeIcon icon={faSchool} />
                  <h3>University</h3>
                  <p>Chandigarh University</p>
                </div>
              </div>
              <div className="about-text">
                <p>
                  Hello! I'm a passionate software developer pursuing my
                  Bachelor's in Computer Science Engineering. I specialize in
                  building scalable applications and solving complex problems
                  using modern technologies.
                </p>
                <p>
                  My technical journey has equipped me with strong
                  problem-solving skills and a deep understanding of software
                  development principles. I'm always eager to learn new
                  technologies and take on challenging projects.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              className="education-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-content">
                      <h3>{edu.degree}</h3>
                      <h4>{edu.institution}</h4>
                      <p className="location">{edu.location}</p>
                      <p className="period">{edu.period}</p>
                      {edu.percentage && (
                        <p className="percentage">
                          Percentage: {edu.percentage}
                        </p>
                      )}
                      {edu.uid && <p className="uid">UID: {edu.uid}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              className="skills-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="tech-categories">
                {techStack.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    className="tech-category"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  >
                    <h3 className="category-name">{category.category}</h3>
                    <div className="tech-cards">
                      {category.techs.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="tech-card"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          whileHover={{
                            scale: 1.02,
                            y: -5,
                            boxShadow: "0 10px 20px rgba(213, 23, 23, 0.2)",
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                        >
                          <div className="tech-icon-wrapper">
                            <FontAwesomeIcon
                              icon={tech.icon}
                              className="tech-icon"
                            />
                          </div>
                          <div className="tech-info">
                            <h4>{tech.name}</h4>
                            <motion.button
                              className={`level-badge ${tech.level
                                .toLowerCase()
                                .replace(/\s+/g, ".")}`}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech.level}
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
