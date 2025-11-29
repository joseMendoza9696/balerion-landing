import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-300 pt-16 pb-8">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground mb-6 block">
              BALERION
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Building the intelligent infrastructure for the next generation of enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/portfolio" className="hover:text-black hover:underline underline-offset-4 transition-colors">Portfolio</Link></li>
              <li><Link to="/products" className="hover:text-black hover:underline underline-offset-4 transition-colors">Products</Link></li>
              <li><Link to="/careers" className="hover:text-black hover:underline underline-offset-4 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a 
                  href="https://www.linkedin.com/company/balerion-io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-black hover:underline underline-offset-4 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">Twitter / X</a></li>
              <li><a href="mailto:jose@balerion.io" className="hover:text-black hover:underline underline-offset-4 transition-colors">jose@balerion.io</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2025 Balerion. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Santa Cruz de la Sierra, Bolivia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;