import React from 'react';
import { Cloud, ShoppingBag, MessageSquare, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Cloud className="w-8 h-8 mb-4" />,
    title: "Software as a Service",
    description: "Scalable, secure, and multi-tenant SaaS platforms designed to grow with your user base and business needs."
  },
  {
    icon: <ShoppingBag className="w-8 h-8 mb-4" />,
    title: "E-commerce",
    description: "High-performance online storefronts and headless commerce solutions that drive conversion and retention."
  },
  {
    icon: <MessageSquare className="w-8 h-8 mb-4" />,
    title: "AI Chatbots & Integrations",
    description: "Intelligent conversational agents and seamless 3rd-party API integrations to automate customer support and workflows."
  },
  {
    icon: <Terminal className="w-8 h-8 mb-4" />,
    title: "Software Development",
    description: "End-to-end custom software engineering, from system architecture to frontend development, tailored to your specifications."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              to="/portfolio"
              key={index} 
              className="group border border-gray-300 p-8 hover:bg-gray-50 transition-colors duration-300 flex flex-col items-start justify-between min-h-[320px] cursor-pointer"
            >
              <div>
                <div className="text-foreground group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-transparent group-hover:border-gray-200 w-full transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;