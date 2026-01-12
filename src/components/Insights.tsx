import React from "react";

const insights = [
  {
    date: "Jan - Mar 2024",
    title: "Star Performer - Certificate of Excellence for Outstanding Performance"
  },
  {
    date: "2024",
    title: "Hackathon ERP Revenue Leakage Analysis - Team Project"
  },
  {
    date: "2023 - Present",
    title: "Accelerated Project Delivery Using AI-Powered Development Tools"
  },
  {
    date: "Ongoing",
    title: "Building Accessible Design Systems at Scale"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="px-6 py-20 lg:p-24 border-b border-stone-200">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl serif">Achievements</h2>
        <p className="hidden md:block text-xs font-medium tracking-widest uppercase text-stone-400">Recognition & Growth</p>
      </div>

      <div className="space-y-12">
        {insights.map((item, idx) => (
          <article key={idx} className="group cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-stone-200 pt-8">
              <div className="md:col-span-2 text-xs text-stone-400">{item.date}</div>
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl serif group-hover:italic transition-all duration-300">{item.title}</h3>
              </div>
              <div className="md:col-span-3 flex justify-end">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-widest">Read Article</span> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
