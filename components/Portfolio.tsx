import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Cavyar",
    category: "Construction",
    description: "We designed and developed their corporate landing page and a custom CRM system to manage accounting, budgets, and ongoing construction projects efficiently.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    link: "https://cavyar.com.bo"
  },
  {
    title: "La Elvira",
    category: "Construction",
    description: "Built a professional landing page and a tailored CRM solution to handle their accounting, project costings, and construction site management.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop",
    link: "https://laelvira.com.bo"
  },
  {
    title: "H2O",
    category: "Beauty & Wellness",
    description: "Developed a robust e-commerce platform enabling online service bookings and sales of premium beauty products like shampoos and styling creams.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop",
    link: "https://h2o.com.bo"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full py-24 bg-white border-b border-gray-100">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Selected Works
            </h2>
            <div className="h-1 w-20 bg-foreground"></div>
          </div>
          <p className="text-sm text-gray-500 max-w-md text-right hidden md:block">
            Showcasing our impact across industries through tailored technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden border border-gray-200 aspect-[16/9] mb-6">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline underline-offset-4 decoration-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;