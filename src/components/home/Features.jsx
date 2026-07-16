export default function Features() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
       
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.317-5.077v-.795M4.757 11.25h14.486m-14.486 0a3.298 3.298 0 0 1-.184-1.2v-.124a3.298 3.298 0 0 1 .184-1.2m14.486 1.2a3.298 3.298 0 0 0 .184-1.2v-.124a3.298 3.298 0 0 0-.184-1.2M6.75 6.75h10.5a2.25 2.25 0 0 1 2.25 2.25v.75a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 9.75v-.75A2.25 2.25 0 0 1 6.75 6.75Z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Free Shipping</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Free delivery nationwide on all orders over $50.</p>
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0 1 12 5.714Z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Secure Payment</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">100% secure checkout and hassle-free return policy.</p>
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            <div className="p-3 bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.33.01.66.032.99.065v9.671a2.25 2.25 0 0 1-2.25 2.25H5.01a2.25 2.25 0 0 1-2.25-2.25V8.576c.33-.033.66-.055.99-.065m16.5 0a48.374 48.374 0 0 0-16.5 0m16.5 0V6.997c0-1.144-.842-2.1-1.996-2.183a41.964 41.964 0 0 0-12.508 0C3.75 4.986 2.91 5.94 2.91 7.084v1.426m17.18 0c0 .083-.004.165-.01.247m-17.16 0a17.47 17.47 0 0 1-.01-.247M3.502 11.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm18.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">24/7 Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Our dedicated support team is always here to help you.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 