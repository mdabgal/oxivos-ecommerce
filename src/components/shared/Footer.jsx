import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
    name: 'GitHub',
    href: 'https://github.com/your-username',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    ),
  },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
         
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-wider">
                OXIVOS<span className="text-blue-600 dark:text-blue-500">.</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A premium frontend experience built for Oxivos Web Development Agency Round 1 Recruitment Task.
              </p>
            </div>
            
           
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors p-2 bg-slate-200/50 dark:bg-slate-900 rounded-full"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600 dark:hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-blue-600 dark:hover:text-white transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-blue-600 dark:hover:text-white transition-colors">My Wishlist</Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white text-sm font-semibold uppercase tracking-wider">Agency Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="text-slate-400 dark:text-slate-500">Web:</span>
                <a href="https://oxivos.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">oxivos.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-slate-400 dark:text-slate-500">Email:</span>
                <a href="mailto:hello@oxivos.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hello@hello@oxivos.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-slate-400 dark:text-slate-500">Call:</span>
                <a href="tel:01688399676" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">01688399676</a>
              </li>
            </ul>
          </div>

        </div>

     
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>&copy; {currentYear} Oxivos Task. Built with Next.js & Tailwind CSS.</p>
          <p>Designed by Candidate</p>
        </div>
      </div>
    </footer>
  );
}