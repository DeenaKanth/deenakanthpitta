import { ArrowDown, Sparkles, Star, Download } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 animate-bounce delay-300">
          <Sparkles className="w-4 h-4 text-red-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-700">
          <Star className="w-3 h-3 text-orange-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-1000">
          <Sparkles className="w-5 h-5 text-purple-400/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            {/* Status badge with enhanced styling */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="relative">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span className="absolute w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></span>
              </span>
              Available for opportunities
            </div>
            
            {/* Enhanced typography with modern styling */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                <span className="text-red-500">
              </span> I'm Deena
                <span className="block text-4xl lg:text-5xl text-gray-300 font-medium mt-3">Business Analytics & AI Graduate</span>
                
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                A passionate Business Analytics graduate with hands-on experience 
                who is always excited to work with you to create wonderful data-driven solutions!
              </p>
            </div>
          </div>

          {/* Enhanced buttons with modern styling */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={() => scrollToSection("projects")} className="group relative bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="relative z-10">Hire Me</span>
            </button>
            <button onClick={() => scrollToSection("contact")} className="group flex items-center gap-2 border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-8">
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">Li</span>
              </div>
              <span className="text-sm">LinkedIn</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">Git</span>
              </div>
              <span className="text-sm">See My Work</span>
            </div>
          </div>
        </div>

        {/* Enhanced profile section with stats */}
        <div className="relative animate-fade-in delay-300">
          {/* Profile Image with decorative background */}
          <div className="relative z-10 max-w-md mx-auto">
            <div className="relative">
              {/* Red decorative background */}
              <div className="absolute -inset-4 bg-red-600 rounded-3xl transform rotate-3"></div>
              
              {/* Profile image container */}
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-4xl font-bold tracking-wide">DK</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                  </div>
                    <div className="text-sm text-gray-400">
                  </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                  </div>
                    <div className="text-sm text-gray-400">
                  </div>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-white">Deena Kanth Pitta</h3>
                  <p className="text-red-400 font-semibold">Business Analytics & AI</p>
                  <p className="text-gray-400 text-sm">UT Dallas Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection("about")} className="group flex flex-col items-center text-gray-400 hover:text-gray-300 transition-all duration-300 p-4 rounded-2xl hover:bg-gray-800/60 backdrop-blur-sm">
          <span className="text-sm mb-2 font-medium">Scroll down</span>
          <div className="p-2 rounded-full border-2 border-current group-hover:scale-110 transition-transform duration-300">
            <ArrowDown className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>;
};
export default Hero;