import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skill_set = [
    { name: "JavaScript", progress: "80%", color: "bg-yellow-500" },
    { name: "Java", progress: "70%", color: "bg-blue-500" },
    { name: "React", progress: "75%", color: "bg-teal-500" },
    { name: "Redux", progress: "70%", color: "bg-purple-500" },
    { name: "HTML", progress: "90%", color: "bg-orange-500" },
    { name: "CSS", progress: "85%", color: "bg-blue-300" },
    { name: "Tailwind CSS", progress: "80%", color: "bg-teal-400" },
    { name: "Google Firebase", progress: "65%", color: "bg-yellow-300" },
    { name: "Git", progress: "75%", color: "bg-red-500" },
  ];

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center py-8 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }} // Trigger when 10% of the element is in view
      transition={{ duration: 0.5 }} // Increased duration for smoother animation
      id="skills"
    >
      <motion.h1
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }} // Trigger when 10% of the element is in view
        transition={{ duration: 0.6 }} // Increased duration for smoother animation
      >
        Skills
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }} // Trigger when 10% of the element is in view
        transition={{ duration: 0.5, delay: 0.4 }} // Increased duration and reduced delay
      >
        {skill_set.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col p-4 rounded-lg shadow-md border-2 border-white"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-lg font-medium">
                {skill.name}
              </span>
              <div
                className={`text-white text-xs font-semibold px-2 py-1 rounded ${skill.color}`}
              >
                {skill.progress}
              </div>
            </div>
            <div className="w-full rounded-full h-3">
              <div
                className={`${skill.color} h-full rounded-full`}
                style={{ width: skill.progress }}
              ></div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
