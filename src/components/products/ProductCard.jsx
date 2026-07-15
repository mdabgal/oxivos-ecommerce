'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useCart();
  

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
      
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            Out of Stock
          </span>
        )}

       
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-500 shadow-xs transition-colors"
          aria-label="Toggle Wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isWishlisted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 ${isWishlisted ? "text-red-500" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1">
          {product.category}
        </span>
        
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 line-clamp-2 mb-2 min-h-[40px]">
          <Link href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center text-amber-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">{product.rating}</span>
          </div>
        </div>

        {/* Price & View Details Action */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-black text-slate-900 dark:text-white">
            ৳{product.price}
          </span>
          
          <Link
            href={`/products/${product.id}`}
            className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}