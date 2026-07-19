import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./06-Projects.css";

const projects = [
  {
    title: "RideBoard",
    image: "/projects/rideboard.png",

    description:
      "RideBoard is a modern ride-sharing mobile application built using React Native, Expo, Firebase Authentication, and Cloud Firestore. The application enables users to securely sign in, post rides, browse available rides, edit their own listings, and contact drivers. Developed with a reusable component architecture and modern UI/UX principles, the project demonstrates mobile application development, cloud integration, and production-ready deployment using Expo EAS Build.",

    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Cloud Firestore",
      "Expo Router",
    ],

    features: [
      "Secure Firebase Authentication",
      "Ride Posting & Management",
      "Browse & Edit Ride Listings",
      "Reusable Component Architecture",
      "Modern Mobile UI/UX",
      "Expo EAS Android Build",
    ],

    github: "https://github.com/kaviish123/RideBoardApp",
  },

 {
  title: "AWS Static Website Hosting",
  image: "/projects/aws.png",

  description:
    "Developed and deployed a static website using Amazon S3 Static Website Hosting as part of my AWS Cloud Practitioner learning journey. The project demonstrates cloud deployment fundamentals, including bucket configuration, public access management, and website hosting on AWS.",

  tags: [
    "AWS",
    "Amazon S3",
    "Cloud Computing",
    "HTML5",
  ],

  features: [
    "Hosted a static website on Amazon S3",
    "Configured bucket permissions and public access",
    "Enabled Static Website Hosting",
    "Created a responsive HTML landing page",
    "Applied AWS Cloud deployment fundamentals",
  ],

  github: "https://github.com/kaviish123/AWS-Static-Website",
},
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-tag">FEATURED PROJECTS</p>

        <h2 className="section-heading">
          Projects That Reflect My Learning Journey
        </h2>

        {projects.map((project, index) => (
          <motion.div
            className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <ul>
                {project.features.map((item) => (
                  <li key={item}>✔ {item}</li>
                ))}
              </ul>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;