'use client';

import { useEffect, useState } from 'react';
import { CartProvider } from './CartContext';

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
   
    const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
          document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

 if (!mounted) {
    return <div className="invisible">{children}</div>;
  }

  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}