import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const RevealFadeUp = ({
  children,
  zIndex = 0,
}: {
  children: ReactNode;
  zIndex?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative" style={{ zIndex }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default RevealFadeUp;
