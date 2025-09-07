import { motion } from 'motion/react';
import Brand from './brand';

const BrandSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-5 sm:gap-15 py-16 min-h-max"
    >
      <Brand styles="w-[34%] sm:min-w-[162px]" />
      <div className="w-fit max-w-80">
        Jeans with real character — not loud, not flashy, but impossible to
        ignore — just like you.
      </div>
    </motion.section>
  );
};

export default BrandSection;
