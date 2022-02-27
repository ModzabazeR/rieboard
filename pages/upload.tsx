import { motion } from "framer-motion";
import React, { FC } from "react";

const Upload: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        Upload
      </div>
    </motion.div>
  );
};

export default Upload;
