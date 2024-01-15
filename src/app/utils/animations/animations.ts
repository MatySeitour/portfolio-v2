export const borderEffect = {
  rest: {
    background:
      "conic-gradient(from 170deg at 50% 50%,#333 0deg,#333 176deg,#a0f 193deg,#acf 216deg,#333 217deg)",
    transition: {},
  },
  hover: {
    background: [
      "conic-gradient(from 170deg at 50% 50%,#333 0deg,#333 176deg,#0af 193deg,#acf 216deg,#333 217deg)",
      "conic-gradient(from 500deg at 50% 50%,#333 0deg,#333 176deg,#a0f 193deg,#acf 216deg,#333 217deg)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
export const projectAnimationContainer = {
  offscreen: {
    backgroundImage: "linear-gradient(0deg, #2220, #2220, #2220,#0000, #0000)",
    transition: {},
  },
  onscreen: {
    backgroundImage: "linear-gradient(0deg, #222e, #222e,#222a, #000d, #000d)",
    transition: {
      duration: 0.2,
    },
  },
};

export const backgroundContactAnimation =
  "linear-gradient(45deg, #444, transparent)";

export const appear = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const containerObserverAnimation = {
  offscreen: {},
  onscreen: {
    transition: {
      duration: 0.5,
    },
  },
};

export const bannerContainerAnimation = {
  visible: {
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export const contactContainer = {
  visible: {
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export const contactItemsAnimation = {
  hidden: { opacity: 0, translateX: -50 },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

export const titleBannerAnimation = {
  hidden: { opacity: 0, translateY: -50 },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};
export const subtitleBannerAnimation = {
  hidden: { opacity: 0, translateY: 50 },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};
