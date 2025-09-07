import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto px-8 max-w-[1500px]">{children}</div>;
};

export default Layout;
