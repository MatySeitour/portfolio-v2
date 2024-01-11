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

export const bgContactGitHub = "linear-gradient(45deg, #444, transparent)";

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
