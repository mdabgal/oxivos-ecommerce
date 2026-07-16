'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { cart, wishlist } = useCart();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist?.length || 0;

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
         
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
             
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
               
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-wider text-slate-900 dark:text-white uppercase">
              VOGUE<span className="text-blue-600">.</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-xs font-black uppercase tracking-wider transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-xs font-black uppercase tracking-wider transition-colors ${
                isActive('/products') ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
            >
              Shop
            </Link>
          </nav>

      
          <div className="flex items-center gap-2 sm:gap-4">
            
           
            <Link
              href="/wishlist"
              className={`p-2 rounded-xl border transition-all relative ${
                isActive('/wishlist')
                  ? 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-950/30'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center px-1 border border-white dark:border-slate-900">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className={`p-2 rounded-xl border transition-all relative ${
                isActive('/cart')
                  ? 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-950/30'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 bg-blue-600 text-white text-[9px] font-black rounded-full flex items-center justify-center px-1 border border-white dark:border-slate-900">
                  {cartCount}
                </span>
              )}
            </Link>

              </div>
               </div>
               </div>

      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-colors ${
                isActive('/') ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-colors ${
                isActive('/products') ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Shop
            </Link>
          </div>
               </div>
      )}
                </header>
  );
}