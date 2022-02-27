import { motion } from "framer-motion";
import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        Blog
      </div>
    </motion.div>
  );
};

export default Blog;
