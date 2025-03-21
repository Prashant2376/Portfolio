// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faCloud,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Skills.css";
import Certificates from "./Certificates";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: faCode,
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 50 },
        { name: "JavaScript", level: 85 },
        { name: "Java Oops", level: 75 },
        { name: "HTML/CSS", level: 80 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: faServer,
      skills: [
        { name: "React", level: 70 },
        { name: "Node.js", level: 0 },
        { name: "Express.js", level: 0 },
        { name: "Bootstrap", level: 0 },
        { name: "Material UI", level: 0 },
      ],
    },
    {
      title: "Databases",
      icon: faDatabase,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 0 },
        { name: "Firebase", level: 0 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: faCloud,
      skills: [
        { name: "AWS", level: 0 },
        { name: "Git", level: 0 },
        { name: "Docker", level: 0 },
      ],
    },
    {
      title: "Future Learning Goals",
      icon: faGraduationCap,
      skills: [
        { name: "Firebase", level: 0, isLearning: true },
        { name: "Node.js", level: 0, isLearning: true },
        { name: "Express.js", level: 0, isLearning: true },
      ],
    },
  ];

  return (
    <section className="skills">
      <div className="skills-floating-bg">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Technical Skills</h2>
          <p>Here are my technical skills and proficiency levels</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} />
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress ${
                          skill.isLearning ? "learning" : ""
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Certificates />
      </div>
    </section>
  );
};

export default Skills;
