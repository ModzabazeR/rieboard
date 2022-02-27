import type { NextPage } from "next";
import Card from "../components/Card";
import cards from "../cards.json";
import { motion } from "framer-motion";

let lorem: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, ipsum nunc euismod nisi, euismod aliquam nisl nunc euismod nisl.";
const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto p-5 max-w-screen-xl my-5">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center">
            {Object.entries(cards).map(([key, card]) => {
              return (
                <Card key={key} title={card.title} tag={card.tag} description={lorem} audioSrc={card.audio} />
                );
            })}
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Home;
