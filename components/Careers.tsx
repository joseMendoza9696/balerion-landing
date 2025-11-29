import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, X, CheckCircle, Cpu } from 'lucide-react';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  stack: string[];
  salaryInfo: string;
}

const jobs: Job[] = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Santa Cruz de la Sierra, Bolivia",
    type: "On-site",
    description: "We are looking for a high-velocity Software Engineer who embraces the 'Vibe Coding' methodology. You won't just write code; you will orchestrate AI agents and tools to build scalable systems at record speed. You must be proficient in the modern web stack and comfortable using AI-assisted workflows.",
    stack: ["Next.js", "Supabase", "Cursor / Windsurf", "Claude Code"],
    requirements: [
      "2+ years of experience in Full Stack Development.",
      "Deep understanding of Next.js App Router and Server Actions.",
      "Proficiency with Supabase (Auth, Database, Edge Functions).",
      "Daily usage of AI coding assistants (Cursor, Copilot, or Windsurf) to accelerate output.",
      "Ability to ship production-ready features independently."
    ],
    salaryInfo: "Competitive Salary (Paid Position)"
  },
  {
    title: "Software Engineer Intern",
    department: "Engineering",
    location: "Santa Cruz de la Sierra, Bolivia",
    type: "On-site",
    description: "Start your career by learning how software is built in the AI era. This is a paid internship designed to turn you into a 'Vibe Coder'—an engineer who leverages AI to multiply their productivity. You will work directly on production codebases.",
    stack: ["Next.js", "Supabase", "AI Tools"],
    requirements: [
      "Strong fundamental knowledge of JavaScript/TypeScript and React.",
      "Familiarity with Next.js and Supabase.",
      "Eagerness to learn AI-assisted development workflows (Claude, Cursor).",
      "Passion for building fast and breaking things.",
      "Must be based in Santa Cruz de la Sierra."
    ],
    salaryInfo: "Paid Internship"
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Santa Cruz de la Sierra, Bolivia",
    type: "On-site",
    description: "We are seeking a dynamic Marketing Manager to lead our digital presence. You will dominate social media channels (LinkedIn, TikTok, Instagram, Facebook), execute high-ROI ad campaigns, and drive organic growth through SEO. Content creation is key—you must be comfortable editing viral-ready videos.",
    stack: ["Google Ads", "SEO", "CapCut", "Social Media Management", "TikTok Algorithm"],
    requirements: [
      "Expertise in managing corporate accounts on LinkedIn, TikTok, Instagram, and Facebook.",
      "Proven track record with Google Ads campaigns and SEO strategies.",
      "Proficiency in video editing using CapCut for fast-paced social content.",
      "Deep understanding of the TikTok algorithm and viral content mechanics.",
      "Ability to analyze metrics and optimize conversion funnels."
    ],
    salaryInfo: "Competitive Salary (Paid Position)"
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section id="careers" className="w-full py-24 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Header Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Join the<br/>Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              We are looking for visionaries, hackers, and builders who want to shape the future of artificial intelligence.
            </p>
            <div className="bg-black text-white p-8 max-w-sm">
              <h3 className="text-xl font-bold mb-2">Culture Code</h3>
              <p className="text-sm text-gray-400 mb-4">
                We value radical candor, speed of execution, and design excellence.
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside text-gray-300">
                <li>Innovation First</li>
                <li>Competitive Compensation</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedJob(job)}
                className="group border border-gray-200 p-6 hover:border-black transition-colors duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-gray-200">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                  {selectedJob.department}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3" /> {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {selectedJob.salaryInfo}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 border-b border-gray-100 pb-2">Role Overview</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 border-b border-gray-100 pb-2">Tech Stack & Methodology</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.stack.map((item, i) => (
                      <span key={i} className="px-3 py-1 border border-gray-200 text-sm font-medium hover:border-black transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 border-b border-gray-100 pb-2">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                        <CheckCircle className="w-5 h-5 text-black shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100">
                  <a 
                    href={`mailto:jose@balerion.io?subject=Application for ${selectedJob.title}`}
                    className="inline-flex items-center justify-center w-full bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors"
                  >
                    Apply for this Position
                  </a>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Please attach your CV and Portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;