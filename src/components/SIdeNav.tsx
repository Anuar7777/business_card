import { motion } from "framer-motion";

const container = {
  hidden: { x: -10 },
  visible: {
    x: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -40 },
  visible: {
    x: 0,
  },
};

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "worklife", label: "Worklife" },
  { id: "contact", label: "Contact" },
];

const SIdeNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="sticky bg-black flex flex-col p-0 z-30">
      <motion.div
        className="fixed"
        variants={container}
        initial="hidden"
        animate="visible">
        <motion.div
          className="h-[65px] w-full flex justify-center items-center mt-2 gap-4"
          variants={item}
          initial="hidden"
          animate="visible"
          transition={{ ease: "linear" }}>
          <a
            href="#top"
            className="text-gray-200 rounded-md leading-none font-bold px-2.5 py-3 w-fit bg-[#111] text-2xl">
            A<span>.</span>
          </a>
        </motion.div>

        {sections.map(({ id, label }) => (
          <motion.div key={id} variants={item} transition={{ ease: "linear" }}>
            <a
              href={`#${id}`}
              className={`vertical-lr h-25 w-15 text-xl text-center border-r-2 py-4 text-[#747578] transition-colors duration-300 hover:text-[#d4d5db] hover:border-[#0aff9d] ${
                activeSection === id
                  ? "text-[#d4d5db] bg-[#111] border-green-400"
                  : "border-r-black"
              }`}>
              {label}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default SIdeNav;
