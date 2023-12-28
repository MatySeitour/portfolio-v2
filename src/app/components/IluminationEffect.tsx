import { motion } from "framer-motion";

export default function IluminationEffect({
  className,
}: {
  className?: string;
}) {
  const onboardingCardAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.7, 0.8, 0.6, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={onboardingCardAnimation}
        className={`banner ${className && className}`}
      ></motion.span>
    </>
  );
}
