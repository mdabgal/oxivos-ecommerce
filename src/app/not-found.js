import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 text-center transition-colors duration-300">
      
    
      <div className="relative mb-6">
        <h1 className="text-9xl font-black text-slate-200 dark:text-slate-900 tracking-tighter select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-500/20 shadow-xs backdrop-blur-md">
            Page Not Found
          </span>
        </div>
      </div>

     
      <div className="space-y-2 max-w-sm mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Lost in the Vogue?
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          The destination you are looking for doesn't exist or has been moved to another runway. Let's get you back.
        </p>
      </div>

    
      <Link 
        href="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
      >
        Return to Home
      </Link>
      
    </div>
  );
}