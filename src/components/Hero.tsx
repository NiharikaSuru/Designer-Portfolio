import React from "react";

export default function Hero() {
  return (
    <section id="intro" className="min-h-[80vh] flex flex-col justify-center px-6 py-20 lg:p-20 border-b border-stone-200">
      <div className="w-full">
        <p className="text-xs font-medium tracking-[0.2em] text-stone-500 mb-6 uppercase">Product Design & User Experience</p>
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-stone-900 mb-12">
          Designing <span className="italic font-normal">intuitive</span> experiences that bridge human <span className="italic font-normal">intention</span> and digital reality.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <a href="#work" className="group flex items-center gap-3 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-stone-600 transition-colors">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <line x1="7" y1="7" x2="17" y2="17"></line>
              <polyline points="17 7 17 17 7 17"></polyline>
            </svg>
          </a>
          <p className="text-stone-500 max-w-md text-sm leading-relaxed">
            Niharika Suru is a UI/UX designer & front-end developer specializing in design systems, user research, and building intuitive experiences for enterprise platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
