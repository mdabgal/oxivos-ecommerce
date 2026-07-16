export default function Newsletter() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900/40 transition-colors">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Get 10% Off Your First Order
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, special sales, and exclusive offers.
          </p>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            required
            placeholder="Enter your email address" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 text-xs font-bold transition-colors"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3 sm:py-0 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}