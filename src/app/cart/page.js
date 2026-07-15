'use client';

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

 
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 120) : 0; // ৫০০০ টাকার উপরে ফ্রি ডেলিভারি
  const tax = Math.round(subtotal * 0.05); 
  const grandTotal = subtotal + shipping + tax;

 
  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
        <div className="bg-slate-200/50 dark:bg-slate-900/50 p-6 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-slate-400 dark:text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Your Cart is Empty</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-sm">Looks like you haven't added anything to your cart yet. Let's find some awesome deals!</p>
        <Link href="/products" className="bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm uppercase tracking-wider">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
    
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Shopping Bag</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">You have {cart.length} unique items in your cart</p>
          </div>
          <button 
            onClick={clearCart}
            className="text-xs font-black uppercase text-red-500 hover:text-red-600 hover:underline transition-colors tracking-wider"
          >
            Clear All
          </button>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
         
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 rounded-2xl gap-4 shadow-2xs transition-colors"
              >
             
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">{item.category}</span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-[280px] uppercase mt-0.5">{item.name}</h3>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">৳{item.price} each</p>
                  </div>
                </div>

              
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800/80">
                 
                  <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 text-sm font-black text-slate-900 dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      +
                    </button>
                  </div>

                 
                  <div className="text-right min-w-[80px]">
                    <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white">৳{item.price * item.quantity}</span>
                  </div>

               
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-400 hover:text-red-500 dark:text-slate-600 dark:hover:text-red-500 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>

              </div>
            ))}
          </div>

        
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl h-fit shadow-xs transition-colors">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-6">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="font-bold text-slate-900 dark:text-white">৳{subtotal}</span>
              </div>
              
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Estimated VAT (5%)</span>
                <span className="font-bold text-slate-900 dark:text-white">৳{tax}</span>
              </div>
              
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping Fee</span>
                {shipping === 0 ? (
                  <span className="font-black text-emerald-600 dark:text-emerald-400 uppercase text-xs">Free Delivery</span>
                ) : (
                  <span className="font-bold text-slate-900 dark:text-white">৳{shipping}</span>
                )}
              </div>
              
              {shipping > 0 && (
                <div className="bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs p-3 rounded-lg font-medium leading-relaxed">
                   ৳{5000 - subtotal} টাকার প্রোডাক্ট বেশি কিনলে উপভোগ করো <strong className="font-black">ফ্রি ডেলিভারি!</strong>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-baseline mb-8">
              <span className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">Total amount</span>
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">৳{grandTotal}</span>
            </div>

           {/* Checkout Button */}
<Link 
  href="/checkout" 
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer text-center block"
>
  Proceed to Checkout
</Link>

            <Link href="/products" className="text-center block text-xs font-black uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mt-4 transition-colors">
              Continue Shopping
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}