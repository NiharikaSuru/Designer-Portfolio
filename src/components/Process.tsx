import React from "react";

const steps = [
  {
    title: "Research & Discovery",
    description: "User interviews, competitive analysis, stakeholder workshops, and data analysis to understand the problem space."
  },
  {
    title: "Ideation & Wireframing",
    description: "Sketching, user flows, information architecture, and low-fidelity wireframes to explore solutions rapidly."
  },
  {
    title: "Design & Prototyping",
    description: "High-fidelity mockups, interactive prototypes, and design system integration for pixel-perfect execution."
  },
  {
    title: "Testing & Iteration",
    description: "Usability testing, A/B testing, and continuous iteration based on user feedback and analytics."
  }
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-20 lg:p-24 border-b border-stone-200 bg-stone-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-8 ">Design Process</h2>
          <div className="w-12 h-[1px] bg-black mb-8"></div>
        </div>
        <div className="lg:col-span-9">
          <p className="serif text-3xl md:text-5xl leading-tight text-stone-900 mb-10">
            "Great design is invisible. It removes <span className="italic text-stone-600">friction</span> and creates moments of delight that users don't even notice."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-loose text-stone-600 mb-16">
            <p>
              My process begins with deep user research and empathy mapping. I believe in designing with data, not assumptions. Through interviews, usability testing, and analytics, I uncover the real problems users face and design solutions that address root causes, not symptoms.
            </p>
            <p>
              I iterate rapidly, moving from low-fidelity wireframes to high-fidelity prototypes. Every design decision is validated through user testing. The goal is to create interfaces that feel effortless, where users achieve their goals without thinking about the interface itself.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-sm font-medium">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
