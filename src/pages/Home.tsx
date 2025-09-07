import BrandSection from '../components/brand-section';
import { motion } from 'motion/react';
import ProductCard from '../core-components/product-card';
import { useState } from 'react';
import type { ProductType } from '../core-components/types';

const Home = () => {
  const [products] = useState<Array<ProductType>>([
    {
      name: 'The @ts-ignore Coder Tee',
      price: 'Rs. 699.00',
      allImages: ['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp'],
      varients: [
        {
          name: 'black',
          img: '/1.webp',
        },
        {
          name: 'white',
          img: '/2.webp',
        },
      ],
    },
    {
      name: 'The @ts-ignore Coder Tee',
      price: 'Rs. 699.00',
      allImages: ['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp'],
      varients: [
        {
          name: 'black',
          img: '/1.webp',
        },
        {
          name: 'white',
          img: '/2.webp',
        },
      ],
    },
    {
      name: 'The @ts-ignore Coder Tee',
      price: 'Rs. 699.00',
      allImages: ['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp'],
      varients: [
        {
          name: 'black',
          img: '/1.webp',
        },
        {
          name: 'white',
          img: '/2.webp',
        },
      ],
    },
  ]);
  return (
    <div>
      <BrandSection />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
        id="hero"
        className="gap-4 grid grid-cols-2 md:grid-cols-3 h-lvh"
      >
        {products?.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </motion.section>
    </div>
  );
};

export default Home;
