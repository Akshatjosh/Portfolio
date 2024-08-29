import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      {/* Center the entire div */}
      <div
        className="mt-8 flex justify-center items-center min-h-screen w-full relative z-10 bg-transparent"
        id="home"
      >
        {/* Content section */}
        <div className="flex justify-between items-center gap-8 text-center p-4">
          {/* Text Content with animation */}
          <motion.div
            className="flex flex-col justify-center items-center gap-2"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <h1 className="text-gray-200 text-4xl md:text-5xl font-bold shadow-md">
              Hello, it's me
            </h1>
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
              Akshat Joshi
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-300">
              And I'm a{" "}
              <span className="text-lime-400">
                <Typewriter
                  words={["Frontend Developer", "Java Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              quia saepe, illum dolores aperiam nesciunt eius iure voluptates
              minus, molestias eaque rem fugit iusto suscipit cumque dolor,
              quaerat officiis quis!
            </p>
            <div className="flex gap-6 mt-4">
              <Link
                to="https://www.linkedin.com/in/akshatjosh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-transparent rounded-full border border-gray-700 shadow-lg hover:bg-gray-700 hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-blue-500 hover:text-neon-500 text-3xl" />
              </Link>
              <Link
                to="https://github.com/Akshatjosh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-transparent text-white rounded-full border border-gray-700 shadow-lg hover:bg-gray-700 hover:text-white transition duration-300"
              >
                <FaGithubSquare className="text-white hover:text-neon-500 text-3xl" />
              </Link>
            </div>
            <button className="mt-6 px-6 py-2 border border-gray-100 text-gray-100 bg-transparent rounded-lg hover:bg-gray-100 hover:text-gray-900 transition duration-300 shadow-md">
              Hire me
            </button>
          </motion.div>

          {/* Image Section with animation */}
          <motion.div
            className="image mt-8 md:mt-0"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <img
              src="src/assets/IMG_20240829_175631[1].jpg"
              alt="photo"
              className="w-72 h-72 object-cover rounded-full border-4 border-gray-700 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
