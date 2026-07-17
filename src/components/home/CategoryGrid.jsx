'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CategoryGrid() {
 const categories = [
    {
      id: 1, 
     name: 'Premium Panjabi',
     
      count: '45+ Items',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop',
      link: '/products?category=shirt',
      gridClass: 'md:col-span-2 md:row-span-2' 
    },
    {
      id: 2,
      name: 'Designer Kurtis',
     
   count: '32+ Items',
    
      image: 'https://cdn.shopify.com/s/files/1/0586/9207/5703/files/01-min_1e683919-387e-4233-b755-094a786e07a4.png?v=1720758370',
     link: '/products?category=kurti',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
 
    {
   
 id: 3,
    name: 'Casual Shirts',
    count: '28+ Items',
     
  image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
      link: '/products?category=shirt',
      gridClass: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Shop by Category
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Explore our curated collections crafted with premium fabrics and modern cuts.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
         
      initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            
      viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group ${category.gridClass}`}
            >
          
          <img
                src={category.image}
             alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

             
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-950/50 backdrop-blur-sm px-2.5 py-1 rounded-md mb-2">
                  {category.count}
          </span>
             
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {category.name}
              
                </h3>
                
                <Link
                  href={category.link}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white group/btn"
                >
                  Discover Now 
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
               </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}