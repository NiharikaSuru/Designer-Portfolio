import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-100">
      {/* Main Footer Content */}
      <div className="px-6 pt-16 pb-10 lg:px-24 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - CTA & Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="serif text-5xl leading-tight mb-8">
              Let's design something <span className="italic">meaningful</span> together.
            </h2>
            
            {/* Contact Form */}
            <form className="space-y-4 mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors text-sm"
                />
              </div>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-transparent border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors resize-none text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 border border-stone-100 text-stone-100 text-xs uppercase tracking-widest hover:bg-stone-100 hover:text-stone-900 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-stone-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              
              {/* Email */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4">Email</h4>
                <a 
                  href="mailto:nihasuru54@gmail.com" 
                  className="text-lg text-stone-300 hover:text-white transition-colors border-b border-stone-600 hover:border-white pb-1"
                >
                  nihasuru54@gmail.com
                </a>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4">Connect</h4>
                <ul className="flex flex-wrap gap-4 text-sm">
                  <li>
                    <a href="https://www.linkedin.com/in/niharika-suru-844975204" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li className="text-stone-600">·</li>
                  <li>
                    <a href="https://github.com/NiharikaSuru?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4">Location</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Visakhapatnam, Andhra Pradesh<br />
                  India - 530016
                </p>
                <p className="text-xs text-stone-500 mt-2 uppercase tracking-wider">Available for remote work</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 lg:px-24 border-t border-stone-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-3">
            <p className="text-xs text-stone-500">
              &copy; 2026 Niharika Suru. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
