import React from 'react';
import { Users, Building2, ArrowUpRight } from 'lucide-react';

const products = [
  {
    icon: <Users className="w-10 h-10" />,
    name: "Trabajito",
    tagline: "Talent Recruitment Platform",
    description: "The leading recruitment software connecting companies with top talent. With over 100,000 monthly visits, we streamline the hiring process efficiently.",
    link: "https://trabajito.com.bo"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    name: "Matrix",
    tagline: "Construction Management",
    description: "Comprehensive software designed for construction firms to manage accounting, budgets, costs, and site operations all in one place.",
    link: "https://matrix.com.bo"
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="w-full py-24 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg">
            Specialized software solutions driving growth in recruitment and construction sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group rounded-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-gray-50 w-fit rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {product.icon}
                  </div>
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-gray-100 rounded-full"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <span className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-4 block">
                  {product.tagline}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-6 flex items-center justify-end">
                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 hover:text-blue-600 transition-colors"
                >
                  View Specifications
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;