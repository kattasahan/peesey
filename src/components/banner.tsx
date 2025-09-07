import { motion } from 'motion/react';

const Banner = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="flex justify-center items-center bg-foreground py-2 text-background"
    >
      {text}
    </motion.div>
  );
};

export default Banner;
