import { motion } from "framer-motion";
import Image from "next/image";

export default function Custom404() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center h-screen">
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
