import { motion } from "framer-motion";
import React, { FC } from "react";

const About: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        About
      </div>
    </motion.div>
  );
};

export default About;
