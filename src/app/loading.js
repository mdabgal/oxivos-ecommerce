export default function GlobalLoading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="relative flex items-center justify-center">
       
        <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
        
     
        <div className="absolute w-10 h-10 border-4 border-slate-200 dark:border-slate-800 border-b-blue-400 rounded-full animate-[spin_1s_linear_infinite_reverse]"></div>
      </div>
      
     
      <div className="mt-6 text-center space-y-1 animate-pulse">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">
          VOGUE
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Loading assets...
        </p>
      </div>
    </div>
  );
}