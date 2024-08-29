import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  // Set up the inView hook
  const { ref, inView } = useInView({
    threshold: 0.65, // Trigger when 10% of the section is in view
  });

  return (
    <div
      ref={ref} // Attach the ref to the parent div
      className="flex justify-center items-center flex-col bg-transparent relative z-10 py-12"
      id="about"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-4xl font-bold text-white mb-6">About</h1>
      </motion.div>

      <div className="flex justify-center items-center gap-8">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <img
            src="src/assets/IMG_20240829_175631[1].jpg"
            alt="photo"
            className="w-72 h-72 object-cover rounded"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <p className="text-md text-gray-300 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            explicabo tenetur nulla soluta placeat! Similique, excepturi eos
            rem, omnis dicta sit facere totam reiciendis alias commodi id
            exercitationem esse beatae aliquam possimus veritatis quod odit a,
            facilis molestias neque. Vero eaque aliquam, magnam dicta tempora
            voluptatibus obcaecati? Ipsa, sint sequi.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
