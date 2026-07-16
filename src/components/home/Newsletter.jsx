'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
 
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

   
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900/80 transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        
        {isSubscribed ? (
       
        
        <div className="space-y-3 animate-fade-in py-4">
         
         <div className="inline-flex bg-emerald-500/10 text-emerald-500 p-3 rounded-full mb-2">
             
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
       <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Thank You For Subscribing!
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Your 10% discount code has been sent to your email inbox. Happy shopping!
            </p>
          </div>
        ) : (
      
          <>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              
                Get 10% Off Your First Order
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          
                Subscribe to our newsletter and be the first to know about new arrivals, special sales, and exclusive offers.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
               
                required
                value={email}
                    onChange={(e) => setEmail(e.target.value)}
              
                    placeholder="Enter your email address" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 text-xs font-bold transition-colors"
              />
              <button 
          
          type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 sm:py-0 rounded-xl transition-colors cursor-pointer shrink-0 active:scale-98"
              >
                Subscribe
              </button>
            </form>
          </>
        )}

      </div>
    </section>
  );
}