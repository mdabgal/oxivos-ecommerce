'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export default function CheckoutPage() {
  
    const { cart, clearCart } = useCart(); 
 
    const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
  name: '',
    phone: '',
   address: '',
    city: 'Dhaka',
    paymentMethod: 'cod',
  });

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
 const shipping = subtotal > 5000 ? 0 : 120;
 
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill out all the required information correctly!');
      return;
    }
    
    setIsOrdered(true);
    clearCart(); 
  };

  if (isOrdered) {
    return (
           <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
        <div className="bg-emerald-500/10 text-emerald-500 p-6 rounded-full mb-6 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight text-center">Order Placed Successfully!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-center max-w-md text-sm leading-relaxed">
          Thank you! We have received your order. One of our representatives will contact you very soon to confirm.
        </p>
        <Link href="/products" className="bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md uppercase tracking-wider">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
       <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">No items to checkout</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Please add some products to your cart first.</p>
    <Link href="/products" className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xs">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Shipping Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
              required
                  placeholder="Enter your full name"
                value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              
              
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                 required
                 placeholder="e.g. 017xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  >
                <option value="Dhaka">Dhaka (Inside)</option>
                    <option value="Chittagong">Chittagong</option>
               
                 <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                 
                  <option value="Khulna">Khulna</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">Payment Method</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  >
                  
                    <option value="cod">Cash on Delivery (COD)</option>
                  </select>
                </div>
                     </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">Full Address</label>
                <textarea
                  required
                  rows="3"
              placeholder="Enter house number, road number, and area details"
                  value={formData.address}
                
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors text-sm resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer text-center"
            >
              Confirm Order (৳{grandTotal})
            </button>
          </form>

          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl h-fit shadow-xs">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">Your Items</h2>
            
            <div className="max-h-[240px] overflow-y-auto space-y-4 mb-6 pr-1 scrollbar-thin">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                
                    </div>
                    <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[140px] uppercase">{item.name}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-slate-900 dark:text-white">৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-xs mb-6 border-t border-b border-slate-100 dark:border-slate-800/80 py-4">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                  <span className="font-bold text-slate-900 dark:text-white">৳{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
         <span>VAT (5%)</span>
                <span className="font-bold text-slate-900 dark:text-white">৳{tax}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="font-black text-emerald-600 dark:text-emerald-400 uppercase text-[10px]">Free</span>
                ) : (
                  <span className="font-bold text-slate-900 dark:text-white">৳{shipping}</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-sm font-black text-slate-900 dark:text-white uppercase">Grand Total</span>
              <span className="text-xl font-black text-blue-600 dark:text-blue-400">৳{grandTotal}</span>
            
            </div>
             </div>

        </div>

      </div>
    </main>
  );
}