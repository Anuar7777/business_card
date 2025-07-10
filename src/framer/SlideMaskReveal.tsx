import { useEffect, useRef } from "react";
import type { ISlideMaskReveal } from "../types";
import { motion, useAnimation, useInView } from "framer-motion";

const SlideMaskReveal = ({
  children,
  width = "auto",
  overflow = "hidden",
  zIndex = 25,
}: ISlideMaskReveal) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contentControls = useAnimation();
  const maskControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      contentControls.start("visible");
      maskControls.start("visible");
    }
  }, [isInView, contentControls, maskControls]);

  return (
    <div ref={ref} className="relative" style={{ width, overflow, zIndex }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={contentControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={maskControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-0 left-0 right-0 bg-green-400 z-100"
      />
    </div>
  );
};

export default SlideMaskReveal;
