import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
        
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold tracking-wider">
              OXIVOS<span className="text-blue-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A premium frontend experience built for Oxivos Web Development Agency Round 1 Recruitment Task.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">My Wishlist</Link>
              </li>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Agency Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="text-slate-500">Web:</span>
                <a href="https://oxivos.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">oxivos.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-slate-500">Email:</span>
                <a href="mailto:hello@oxivos.com" className="hover:text-blue-400 transition-colors">hello@oxivos.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-slate-500">Call:</span>
                <a href="tel:01688399676" className="hover:text-blue-400 transition-colors">01688399676</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} Oxivos Task. Built with Next.js & Tailwind CSS.</p>
          <p>Designed by Candidate</p>
        </div>
      </div>
    </footer>
  );
}