import { useEffect, useRef, useState } from 'react';
import type { ProductType } from './types';
import Carousel from './carousel';

const ProductCard = ({ name, price, allImages, varients }: ProductType) => {
  const [activeVarient, setActiveVarient] = useState<{
    name: string;
    img: string;
  }>(varients[0]);
  const [activeVarientOnHover, setActiveVarientOnHover] = useState<{
    name: string;
    img: string;
  } | null>(null);
  const [isCarousel, setIsCarousel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cur, setCur] = useState(1);

  useEffect(() => {
    if (cur === 0) setCur(1);
    if (isCarousel && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: width * cur,
        behavior: 'auto',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarousel]);

  const slide = (action: 'next' | 'prev') => {
    let next = cur;
    if (action === 'next') {
      next = (cur + 1) % allImages.length;
    } else if (action === 'prev') {
      next = (cur - 1 + allImages.length) % allImages.length;
    }
    setCur(next);

    // Scroll to the next image
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: width * next,
        behavior: 'smooth',
      });
    }
  };

  const Varient = (varient: { name: string; img: string }) => {
    const handleHover = (action: 'enter' | 'leave') => {
      if (action === 'enter') {
        setActiveVarientOnHover(varient);
      } else {
        setActiveVarientOnHover(null);
      }
    };

    return (
      <div
        className={`flex justify-center items-center rounded-4xl w-7 sm:w-8 h-7 sm:h-8 ${
          varient.name == activeVarientOnHover?.name &&
          'border-gray-400 border-2'
        } ${varient.name == activeVarient.name && 'border-gray-950 border-2'}`}
        onClick={() => setActiveVarient(varient)}
        onMouseEnter={() => handleHover('enter')}
        onMouseLeave={() => handleHover('leave')}
      >
        <div className="border-1 border-transparent rounded-4xl w-6 sm:w-7 h-6 sm:h-7 object-cover overflow-clip">
          <img src={varient.img} className="w-full h-full" />
        </div>
      </div>
    );
  };

  return (
    <div className="h-fit transition hover:-translate-y-1 duration-75 cursor-pointer">
      <div
        onMouseEnter={() => setIsCarousel(true)}
        onMouseLeave={() => setIsCarousel(false)}
      >
        {/* <Carousel
          imgs={allImages}
          cur={cur}
          slide={slide}
          containerRef={containerRef}
        /> */}
        {isCarousel ? (
          <Carousel
            imgs={allImages}
            slide={slide}
            containerRef={containerRef}
          />
        ) : (
          <img
            src={activeVarientOnHover?.img || activeVarient.img}
            className="object-cover"
          />
        )}
      </div>
      <section className="flex flex-col gap-2 py-2">
        <div>{name}</div>
        <div>{price}</div>
        <div className="flex gap-1">
          {varients?.map((varient) => (
            <Varient key={varient.name} {...varient} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
