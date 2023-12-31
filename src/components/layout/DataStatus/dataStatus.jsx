import { usePageAnimation } from "../../../hooks/animation/pages/pageAnimation";
import ResultCard from "../result-card/resultCard";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const DataStatus = ({ data, isLoading, isError }) => {
  const { pageAnimation } = usePageAnimation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageAnimation}
        initial={pageAnimation.initial}
        animate={pageAnimation.inInitial}
        transition={{ delay: 0.2 }}
        exit={pageAnimation.exit}
      >
        {data && <ResultCard data={data} />}
        <div
          className={`w-full max-w-797 bg-secondaryClr rounded-xl ${
            data ? "" : "p-generalPad"
          } text-verySmallFont text-fontClr flex flex-col `}
        >
          {isLoading && <p>loading</p>}
          {!data && !isLoading && !isError ? <p>no users yet...</p> : ""}
          {isError && <p>user not found !, check for valid username</p>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataStatus;
