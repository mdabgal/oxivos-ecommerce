'use client';

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCart();


  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
        <div className="bg-slate-200/50 dark:bg-slate-900/50 p-6 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-slate-400 dark:text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Your Wishlist is Empty</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-sm">Save your favorite items here to purchase them later.</p>
        <Link href="/products" className="bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm uppercase tracking-wider">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Favorites</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">You have {wishlist.length} items saved in your wishlist</p>
        </div>

        {/* Wishlist Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col relative"
            >
          
              <button 
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl text-red-500 hover:scale-105 active:scale-95 border border-slate-200/50 dark:border-slate-800 shadow-2xs transition-all cursor-pointer"
                title="Remove from Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                {!product.inStock && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md">
                    Out of Stock
                  </span>
                )}
              </div>

         
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-1">
                  {product.category}
                </span>
                
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase truncate mb-1">
                  {product.name}
                </h3>
                
                <p className="text-base font-black text-slate-900 dark:text-white mt-auto pt-2">
                  ৳{product.price}
                </p>
              </div>

             
              <div className="p-4 pt-0 mt-auto">
                <button
                  disabled={!product.inStock}
                  onClick={() => {
                    addToCart(product);
                    toggleWishlist(product); 
                  }}
                  className={`w-full font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-2xs transition-all text-center block ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-98 cursor-pointer'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Move to Cart' : 'Unavailable'}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}