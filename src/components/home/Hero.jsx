import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 sm:py-32 transition-colors duration-300">
      
    
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40">
       
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-300 dark:bg-blue-600 blur-[150px] opacity-50" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-200 dark:bg-indigo-600 blur-[150px] opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20 dark:ring-blue-500/30 mb-6 animate-pulse">
            New Festive Collection 2026 
          </span>

        
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl uppercase leading-none">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Traditional Vibe
            </span>
          </h1>

         
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover a premium range of modern Panjabis, shirts, and designer Kurtis crafted with the finest fabrics to celebrate your special moments.
          </p>

       
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/products"
              className="rounded-md bg-blue-600 dark:bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 dark:hover:bg-blue-400 hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Shop Collection
            </Link>
            <Link 
              href="/products" 
              className="group text-sm font-semibold leading-6 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Explore Trends <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

   
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800" />
    </section>
  );
}