export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0 10px 30px rgba(30,58,138,0.08)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 50px rgba(30,58,138,0.15)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
