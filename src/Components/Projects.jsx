import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Correct import
import { useEffect } from "react";

function Projects() {
  const project_list = [
    {
      live: "https://main--beautiful-frangipane-8ccb14.netlify.app/",
      source: "https://github.com/Akshatjosh/MyTube",
      projectName: "MyTube",
      projectdesc:
        "A React-based video streaming application showcasing trending videos and channel content. Implemented interactive features like subscribe and like buttons, a Liked Videos section, playlist management, and a search suggestion system with debouncing. Also launched a dark theme for a better user experience. Technologies used include React, Redux, Tailwind CSS, and the YouTube API.",
      photo: "https://via.placeholder.com/400x300", // Replace with actual image URL if available
    },
    {
      live: "https://wonderful-frangollo-420faa.netlify.app/",
      source: "https://github.com/Akshatjosh/MovieFix",
      projectName: "MovieFix",
      projectdesc:
        "A movie browsing application with a modern UI and secure authentication via Google Firebase. Features include multilingual support, a splash screen, shimmer effect for loading states, and dynamic page titles. Integrated TMDB API for movie categories and a similar movies feature to enhance content exploration. Built with React, Redux, Tailwind CSS, TMDB API, and Firebase Authentication.",
      photo: "https://via.placeholder.com/400x300", // Replace with actual image URL if available
    },
  ];

  // Framer Motion variants for text animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1.2,
      },
    }),
  };

  const headingAnimation = useAnimation();

  // Correct useInView hook from react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      headingAnimation.start("visible");
    }
  }, [headingAnimation, inView]);

  return (
    <div className="py-12 bg-transparent relative z-10" id="projects">
      <div className="flex justify-center items-center flex-col">
        <motion.h1
          initial="hidden"
          animate={headingAnimation}
          className="text-4xl font-bold text-white"
          ref={ref}
        >
          {"Projects".split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={textVariant}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {project_list.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg border-2 border-white"
            >
              {project.photo && (
                <img
                  src={project.photo}
                  alt={project.projectName}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {project.projectName}
                </h2>
                <p className="text-gray-300 mb-6">{project.projectdesc}</p>
                <div className="flex justify-between">
                  <Link
                    to={project.source}
                    className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300 hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Source Code
                  </Link>
                  <Link
                    to={project.live}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
