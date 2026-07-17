'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
  
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-20 lg:py-28 transition-colors duration-300">
      
     
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-300 dark:bg-blue-600 blur-[150px] opacity-40" />
      
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-200 dark:bg-indigo-600 blur-[150px] opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
     
          <motion.div 
            initial="hidden"
         animate="visible"
        
            variants={staggerContainer}
            className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20 dark:ring-blue-500/30 animate-pulse">
           New Festive Collection 2026 
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
           className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl uppercase leading-none"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Traditional Vibe
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Discover a premium range of modern Panjabis, shirts, and designer Kurtis crafted with the finest fabrics to celebrate your special moments.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="pt-4 flex items-center justify-center lg:justify-start gap-x-6"
            >
              <Link
                href="/products"
                className="rounded-xl bg-blue-600 dark:bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-500 dark:hover:bg-blue-400 hover:scale-105 active:scale-98 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                Shop Collection
              </Link>
              <Link 
                href="/products" 
                className="group text-sm font-bold leading-6 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Explore Trends <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

         
          <motion.div 
         initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
         
        className="relative flex items-center justify-center gap-4 sm:gap-6"
          >
        
            <div className="w-1/2 pt-12">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl group cursor-pointer aspect-[3/4]">
                <img
            src="https://bipinbd.com/wp-content/uploads/2024/10/MENS-PREMIUM-50.png"
               alt="Premium Men Traditional Panjabi"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
      
           <div className="w-1/2 pb-12">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl group cursor-pointer aspect-[3/4]">
                <img
          src="https://cdn.shopify.com/s/files/1/0586/9207/5703/files/01-min_1e683919-387e-4233-b755-094a786e07a4.png?v=1720758370"
            
          alt="Modern Designer Kurti"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
       
            <motion.div 
          animate={{ y: [0, -10, 0] }}
            
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-4 left-4 sm:left-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 backdrop-blur-sm"
            >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-black uppercase text-slate-800 dark:text-slate-200 tracking-wider">Premium Quality</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800" />
    </section>
  );
}