export const borderEffect = {
  rest: {
    background:
      "conic-gradient(from 170deg at 50% 50%,#333 0deg,#333 176deg,#f02 193deg,#333 217deg)",
    transition: {
      delay: 0,
    },
  },
  hover: {
    background: [
      "conic-gradient(from 170deg at 50% 50%,#333 0deg,#333 176deg,#f02 193deg,#333 217deg)",

      "conic-gradient(from 530deg at 50% 50%,#333 0deg,#333 176deg,#f02 193deg,#333 217deg)",
    ],
    transition: {
      delay: 0,
      duration: 4,
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
