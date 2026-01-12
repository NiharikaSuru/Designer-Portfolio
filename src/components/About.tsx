import React from "react";

const skills = [
  { category: "UI/UX Tools & Design Practices", items: ["Figma", "Adobe XD", "Canva", "Sketch", "Pencil", "Balsamiq", "Wireframing", "Prototyping", "Responsive Design", "A/B Testing"] },
  { category: "Frontend", items: ["HTML", "CSS", "SASS", "Angular", "React", "JavaScript", "TypeScript", "Bootstrap", "Tailwind", "PrimeNG", "ShadCn", "Lambda Testing"] },
];

const stats = [
  { number: "2.5+", label: "Years Experience" },
  { number: "30%", label: "Faster Prototyping" },
  { number: "10+", label: "Real Time Projects" }
];

const experienceCards = [
  {
    title: "Enterprise UI Development",
    description: "Designed and developed responsive enterprise interfaces with Angular, React, PrimeNG, Tailwind, and Bootstrap, improving usability across devices."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Created wireframes and prototypes in Figma/Adobe XD, translating BRDs into intuitive workflows and validating concepts early in the design process."
  },
  {
    title: "Agile Collaboration",
    description: "Collaborated in agile teams (BA, QA, developers) using Jira & Git, ensuring on-time sprint delivery with clear documentation and handoffs."
  },
  {
    title: "Design System Migration",
    description: "Migrated legacy design systems from Adobe XD to Figma, establishing component libraries that enabled 30% faster prototyping across teams."
  },
  {
    title: "Angular Upgrades & Refactoring",
    description: "Contributed to Angular upgrades (v9 → v19), refactoring components for better performance, maintainability, and modern best practices."
  },
  {
    title: "AI-Powered Development",
    description: "Leveraged AI tools (GitHub Copilot) to accelerate coding, improve development efficiency, and maintain high code quality standards."
  }
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-12 md:py-20 lg:p-24 border-b border-stone-200">
      {/* About & Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-20">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <h2 className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-6 lg:mb-8">About Me</h2>
          <div className="w-12 h-[1px] bg-black mb-6 lg:mb-8"></div>

          {/* Company Info - Desktop */}
          <div className="hidden lg:block">
            <div className="serif text-xl italic text-stone-900 mb-2">Amzur Technologies Pvt Limited</div>
            <div className="text-xs text-stone-400 uppercase tracking-widest mt-2 mb-2">June 2023 - Present</div>
            <div className="text-sm text-stone-500">Visakhapatnam, India</div>
          </div>
          
          {/* Stats - Desktop */}
          <div className="hidden lg:flex flex-col gap-8 mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="serif text-4xl italic text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">{stat.number}</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          {/* Company Info - Mobile/Tablet */}
          <div className="lg:hidden mb-6 pb-4 border-b border-stone-200">
            <div className="serif text-xl sm:text-2xl italic text-stone-900 mb-1">Amzur Technologies Private Limited</div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-stone-500">
              <span>June 2023 - Present</span>
              <span>·</span>
              <span>Visakhapatnam, India</span>
            </div>
          </div>

          <p className="serif text-2xl sm:text-3xl md:text-4xl leading-tight text-stone-900 mb-6 md:mb-8">
            Software Developer crafting <span className="italic text-stone-600">user-centered</span> designs that blend aesthetics with functionality.
          </p>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {experienceCards.map((card, idx) => (
              <div key={idx} className="p-4 md:p-5 border-l-2 border-stone-200 hover:border-stone-900 transition-colors duration-300">
                <h4 className="serif text-base md:text-lg italic text-stone-900 mb-2">{card.title}</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Stats - Mobile/Tablet */}
          <div className="flex lg:hidden gap-4 sm:gap-8 mt-8 md:mt-12 justify-between">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center flex-1">
                <div className="serif text-2xl sm:text-3xl italic text-stone-900 mb-1">{stat.number}</div>
                <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-6 lg:mb-8">Skills & Expertise</h3>
          <div className="w-12 h-[1px] bg-black"></div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-8 md:space-y-10">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h4 className="serif text-lg md:text-xl italic text-stone-900 mb-3 md:mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className="px-3 py-1.5 md:px-4 md:py-2 border border-stone-300 rounded-full text-xs sm:text-sm text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500 ease-in-out cursor-default "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
