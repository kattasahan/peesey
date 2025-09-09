import { MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { RefObject } from 'react';

const Carousel = ({
  imgs,
  slide,
  containerRef,
}: {
  imgs: string[];
  slide: (action: 'prev' | 'next') => void;
  containerRef?: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => slide('prev')}
        className="top-1/2 z-1 absolute p-3"
      >
        <MoveLeft />
      </motion.div>

      <div
        ref={containerRef}
        className="[&::-webkit-scrollbar]:hidden relative flex w-full overflow-x-auto snap-mandatory snap-x"
      >
        {imgs.map((img, idx) => (
          <div
            key={idx}
            className="w-[round(up,100%,1px)] snap-center shrink-0"
          >
            <img src={import.meta.env.BASE_URL + '/' + img} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => slide('next')}
        className="top-1/2 right-0 z-1 absolute p-3"
      >
        <MoveRight />
      </motion.div>
    </div>
  );
};

export default Carousel;
