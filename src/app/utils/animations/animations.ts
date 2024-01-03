export const borderEffect = {
  rest: {
    background:
      "conic-gradient(from 220deg at 50% 50%,#333 0deg,#333 176deg,#999 193deg,#333 217deg)",
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0,
    },
  },
  hover: {
    background:
      "conic-gradient(from 360deg at 50% 50%,#333 0deg,#333 176deg,#999 193deg,#333 217deg)",
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0,
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
