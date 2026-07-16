'use client';

import { products } from '@/data/products';
import ProductCard from '../products/ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase block mb-2">
              Customer Favorites
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              Featured Products
            </h2>
          </div>
          
          <Link
            href="/products"
            className="group text-sm font-bold text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            View All Collection 
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}