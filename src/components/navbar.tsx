import { NavLink } from 'react-router';

import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import config from '../app.config';
import { translations } from '../app.transalations';
import Brand from './brand';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
// import {}

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isBrand, setIsBrand] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 35) {
      setIsBrand(true);
    } else {
      setIsBrand(false);
    }
  });

  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-normal' : 'font-light';

  const links = [
    { key: 'home', path: '/', label: translations.navBar.home },
    { key: 'catalog', path: '/catalog', label: translations.navBar.catalog },
    { key: 'contact', path: '/contact', label: translations.navBar.contact },
  ];

  const { size, strokeWidth } = config.lucide;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="top-0 z-1 sticky flex justify-between items-center bg-background h-[60px]"
    >
      <div className="sm:hidden flex gap-6 sm:gap-4">
        <Menu size={size} strokeWidth={strokeWidth} />
        <Search size={size} strokeWidth={strokeWidth} className="" />
      </div>
      <div className="hidden sm:visible sm:flex gap-6 sm:gap-4">
        {links.map(({ key, path, label }) => (
          <NavLink key={key} to={path} className={isActive}>
            {label}
          </NavLink>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, y: 10 }}
        animate={{ scale: isBrand ? 1 : 0, y: 0 }}
        transition={{ duration: 0.2, ease: 'linear' }}
        className="justify-center items-center z"
      >
        <Brand styles="h-6 px-4" />
      </motion.div>

      <div className="flex gap-6 sm:gap-4">
        <Search
          size={size}
          strokeWidth={strokeWidth}
          className="hidden sm:visible sm:block"
        />
        <User size={size} strokeWidth={strokeWidth} />
        <ShoppingBag size={size} strokeWidth={strokeWidth} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
