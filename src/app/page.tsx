

import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Insights from "../components/Insights";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-full w-full">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <CaseStudies />
        <Process />
        <Insights />
        <Footer />
      </main>
    </div>
  );
}
