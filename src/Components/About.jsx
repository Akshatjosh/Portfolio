import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  return (
    <div
      ref={ref}
      className="relative z-10 flex flex-col justify-center items-center bg-transparent py-12 px-4"
      id="about"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          About
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <img
            src="src\assets\mypicture.JPG"
            alt="photo"
            className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <p className="text-md text-gray-300 leading-relaxed max-w-lg">
            I am a passionate software developer currently pursuing a Master of
            Computer Applications at Graphic Era Hill University. With a strong
            background in JavaScript and Java, I've built a variety of projects
            such as MyTube, MovieFix, and a Quiz App, using technologies like
            React, Redux, and Firebase. I enjoy creating intuitive and
            user-friendly applications and thrive in collaborative environments.
            I am committed to continuously enhancing my skills and staying
            updated with the latest developments in the tech industry
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
