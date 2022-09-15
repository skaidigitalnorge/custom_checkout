const favEaseCurve = [0.19, 1.0, 0.22, 1.0];

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

const autoHeightAnimation = {
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      opacity: {
        delay: 0.1,
        duration: 0.1,
      },
    },
  },
  hide: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export { fadeAnimation, autoHeightAnimation };
