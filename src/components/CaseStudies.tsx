import React from "react";

const projects = [
  // {
  //   id: 1,
  //   title: "Smart Jewel Craft",
  //   subtitle: "Jewelry E-commerce Platform",
  //   description: "A modern, interactive platform for jewelry shopping with advanced filtering, AR try-on, and seamless checkout.",
  //   year: "2025",
  //   image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
  //   link: "https://smartjewelcraft.netlify.app/",
  //   tags: ["React", "E-commerce", "UI/UX"]
  // },
  {
    id: 2,
    title: "CarePulse - Patient Portal",
    subtitle: "Healthcare Patient Portal",
    description: "A patient-centric portal for healthcare management, appointment scheduling, and health record tracking.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    link: "https://appcarepulse.netlify.app/",
    tags: ["Healthcare", "Portal", "UI/UX"]
  },
  {
    id: 3,
    title: "GreenRoot - Grow Your Own Green Paradise",
    subtitle: "Gardening & Sustainability App",
    description: "A platform to help users grow and manage their own gardens, with tips, reminders, and a plant community.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop",
    link: "https://appgreenroot.netlify.app/",
    tags: ["Gardening", "Sustainability", "React"]
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="border-b border-stone-200">
      {/* Section Header */}
      <div className="px-6 pt-16 pb-8 lg:px-12 lg:pt-20">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-5xl serif">Featured Projects</h2>
          </div>
          <p className="hidden md:block text-sm text-stone-500 max-w-xs text-right">Real-world projects showcasing UI/UX design and frontend development skills.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 lg:p-12 flex flex-col h-full hover:bg-white transition-colors duration-500 ${
              index < projects.length - 1 ? 'border-b md:border-b-0' : ''
            } ${
              index % 2 === 0 ? 'md:border-r' : ''
            } border-stone-200`}
          >
            <div className="mb-8 overflow-hidden aspect-[4/4] bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>
            <div className="mt-auto">
              {/* <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-medium tracking-widest text-stone-400">{String(project.id).padStart(2, '0')}</span>
                <span className="text-xs font-medium tracking-widest text-stone-400">{project.year}</span>
              </div> */}
              <h3 className="text-3xl lg:text-4xl serif italic mb-2">{project.title}</h3>
              <p className="text-sm text-stone-500 mb-4">{project.subtitle}</p>
              <p className="text-stone-600 text-sm leading-relaxed max-w-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-stone-100 text-stone-600">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
