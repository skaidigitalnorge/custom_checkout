const fadeAnimation = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

export { fadeAnimation };
