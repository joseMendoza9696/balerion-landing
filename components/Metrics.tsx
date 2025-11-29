import React from 'react';

const stats = [
  {
    value: "15+",
    label: "Projects Delivered",
    detail: "Successful launches across fintech and retail sectors"
  },
  {
    value: "2x",
    label: "Faster Delivery",
    detail: "Reduced development cycles compared to traditional methods"
  },
  {
    value: "100%",
    label: "Client Retention",
    detail: "Commitment to long-term partnerships and success"
  },
  {
    value: "40%",
    label: "Cost Reduction",
    detail: "Average operational savings for our early adopters"
  }
];

const Metrics: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-l-2 border-gray-100 pl-6 md:pl-8">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-black mb-2">
                {stat.label}
              </span>
              <p className="text-xs md:text-sm text-gray-400 max-w-[200px] leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;