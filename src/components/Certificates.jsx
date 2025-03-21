import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Certificates.css";

const Certificates = () => {
  const [activeSection, setActiveSection] = useState("Course");

  const certificates = [
    {
      id: 1,
      category: "Course Certifications",
      name: "21BCS2376_Prashant Rai[DM]",
      path: "/certificates/dm.pdf",
      date: "2024",
      description: "Descrete Mathematics Course Certificate",
    },
    {
      id: 2,
      category: "Course Certifications",
      name: "21BCS2376_Prashant Rai[IOT]",
      path: "/certificates/iot.pdf",
      date: "2024",
      description: "Internet of Things Course Certificate",
    },
    {
      id: 3,
      category: "Course Certifications",
      name: "21BCS2376_Prashant Rai[Probablity]",
      path: "/certificates/probability.pdf",
      date: "2024",
      description: "Probability Course Certificate",
    },
    {
      id: 4,
      category: "Professional Certifications",
      name: "CN C++",
      path: "/certificates/cn-cpp.pdf",
      date: "2023",
      description: "C++ Programming Certification from Coding Ninjas",
    },
    {
      id: 5,
      category: "Professional Certifications",
      name: "Accenture Training",
      path: "/certificates/accenture.pdf",
      date: "2023",
      description: "Internship Completion Certificate from Accenture",
    },
    {
      id: 6,
      category: "Professional Certifications",
      name: "Certificate 1",
      path: "/certificates/certificate1.pdf",
      date: "2023",
      description: "Professional Development Certificate",
    },
  ];

  const courseCertificates = certificates.filter(
    (cert) => cert.category === "Course Certifications"
  );
  const professionalCertificates = certificates.filter(
    (cert) => cert.category === "Professional Certifications"
  );

  return (
    <div className="certificates-container">
      <div className="cert-nav">
        <motion.button
          className={`cert-nav-btn ${
            activeSection === "Course" ? "active" : ""
          }`}
          onClick={() => setActiveSection("Course")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Course Certifications
        </motion.button>
        <motion.button
          className={`cert-nav-btn ${
            activeSection === "Professional" ? "active" : ""
          }`}
          onClick={() => setActiveSection("Professional")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Professional Certifications
        </motion.button>
      </div>

      <div className="certificates-section">
        {activeSection === "Course" && (
          <motion.div
            className="category-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="category-title">Course Certifications</h2>
            <div className="cert-list">
              {courseCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="cert-item"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4>{cert.name}</h4>
                  <div className="cert-meta">
                    <span className="cert-date">
                      <FontAwesomeIcon icon={faCalendar} /> {cert.date}
                    </span>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                  <motion.a
                    href={cert.path}
                    className="download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Open Certificate
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === "Professional" && (
          <motion.div
            className="category-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="category-title">Professional Certifications</h2>
            <div className="cert-list">
              {professionalCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="cert-item"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4>{cert.name}</h4>
                  <div className="cert-meta">
                    <span className="cert-date">
                      <FontAwesomeIcon icon={faCalendar} /> {cert.date}
                    </span>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                  <motion.a
                    href={cert.path}
                    className="download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Open Certificate
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
