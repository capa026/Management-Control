import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const AnimateShow = ({
  condition,
  children,
  initial = { opacity: 0, scale: 0.5 },
  animate = { opacity: 1, scale: 1, transition: "linear" },
  exit = { opacity: 0, scale: 0.5 },
  className,
}) => {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          className={`${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateShow;
