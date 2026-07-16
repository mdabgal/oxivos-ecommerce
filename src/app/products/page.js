'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function ProductsPage() {

const [searchTerm, setSearchTerm] = useState('');
        const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');


const categories = ['All', ...new Set(products.map((p) => p.category))];


  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
     
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; 
    });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
     
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase mb-2">
            Our Collection
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Browse through our premium traditional and casual outfits ({filteredProducts.length} items found).
          </p>
        </div>

       
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8 shadow-xs flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between transition-colors">
          
        
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
       <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
              </svg>
            </span>
            <input
              type="text"
           placeholder="Search products..."
              value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

         
          <div className="flex flex-wrap items-center gap-4">
            
          
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
              onClick={() => setSelectedCategory(category)}
                  className={`text-xs font-bold px-4 py-2.5 rounded-lg border transition-all ${
                   selectedCategory === category
               ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 min-w-[160px]">
              <select
                value={sortBy}
             onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-bold px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="default">Sort By: Default</option>
                
             <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                
                <option value="rating">Popularity (Rating)</option>
              </select>
            </div>

          </div>
            </div>

    {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mx-auto h-12 w-12 text-slate-400 mb-4">
         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
            </svg>
       <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">No products found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Try changing your keywords or filters.</p>
            </div>
        )}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}