'use client';

import { use } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
 
  const { id } = use(params);
  const { addToCart, wishlist, toggleWishlist } = useCart();

  
  const product = products.find((p) => p.id === parseInt(id));

 
  const isWishlisted = wishlist.some((item) => item.id === product?.id);


  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Product Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">The item you are looking for does not exist.</p>
        <Link href="/products" className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 lg:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <nav className="mb-8 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300 truncate max-w-[200px]">{product.name}</span>
        </nav>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xs transition-colors">
          
        
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {!product.inStock && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md">
                Out of Stock
              </span>
            )}
          </div>

      
          <div className="flex flex-col justify-center">
           
            <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              {product.category}
            </span>

          
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-4 leading-tight">
              {product.name}
            </h1>

          
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-amber-500 bg-amber-500/10 dark:bg-amber-500/5 px-2.5 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-black">{product.rating} Rating</span>
              </div>

              <span className={`text-xs font-bold uppercase tracking-wider ${product.inStock ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                {product.inStock ? '● In Stock' : '● Unavailable'}
              </span>
            </div>

         
            <div className="border-t border-b border-slate-100 dark:border-slate-800/80 py-4 mb-6">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                ৳{product.price}
              </span>
            </div>

           
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
              {product.description}
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                disabled={!product.inStock}
                onClick={() => addToCart(product)}
                className={`flex-1 font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-xs transition-all ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-98 cursor-pointer'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Shopping Cart' : 'Out of Stock'}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  isWishlisted
                    ? 'border-red-200 bg-red-50 dark:bg-red-950/20 text-red-500'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-500'
                }`}
                aria-label="Toggle Wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isWishlisted ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}