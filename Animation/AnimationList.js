export function fadeIn(direction = "up") {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
}
export function staggerContainer() {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.7,
      },
    },
  };
}
export function imageWrapper() {
  return {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        delay: 2.6,
        duration: 0.8,
        type: "spring",
      },
    },
  };
}
export function image() {
  return {
    initial: {},
    animate: {
      y: [15, 0, 15],
      transition: {
        duration: 1.6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
}

export const cardVariants = {
  initial: {
    x: -1000,
  },
  onscreen: {
    x: 50,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export const fromLeftAnimation = {
  initial: {
    x: -200,
  },

  whileInView: {
    x: 0,
    type: "spring",
    duration: 7,
  },
};
export const fromBottomAnimation = {
  initial: {
    y: 200,
  },

  whileInView: {
    y: 0,
    type: "spring",
    duration: 7,
  },
};
export const fromRightAnimation = {
  initial: {
    x: 100,
  },

  whileInView: {
    x: 0,
    type: "spring",
  },
};
