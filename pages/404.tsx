import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Custom404 = () => {
  const EndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    EndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center h-screen" ref={EndRef}>
        <Image
          src="https://walfiegif.files.wordpress.com/2021/01/out-transparent-7.gif"
          alt="tap tap"
          width={192}
          height={192}
        />
        <h1 className="text-3xl font-bold m-4">404 - Page Not Found</h1>
      </div>
    </motion.div>
  );
}

export default Custom404;