
import { ArrowDown, Sparkles, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-teal-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100/50 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-100/40 to-orange-100/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 animate-bounce delay-300">
          <Sparkles className="w-4 h-4 text-blue-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-700">
          <Star className="w-3 h-3 text-teal-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-1000">
          <Sparkles className="w-5 h-5 text-purple-400/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            {/* Status badge with enhanced styling */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-700 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="relative">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span className="absolute w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></span>
              </span>
              Available for opportunities
            </div>
            
            {/* Enhanced typography with modern styling */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 leading-tight tracking-tight">
                Hello
                <span className="block text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 font-medium mt-3">
                  — I'm Deena, a design wizard
                </span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl font-medium">
                Business Analytics & AI Professional | Data-Driven Decision Maker
              </p>
              
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Graduate student at UT Dallas with hands-on experience in analytics, forecasting, and business operations.
              </p>
            </div>
          </div>

          {/* Enhanced buttons with modern styling */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-blue-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              Get in Touch
            </button>
          </div>

          {/* Enhanced stats with modern cards */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="group text-center p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">+200</div>
              <div className="text-sm text-gray-500 font-medium">Projects completed</div>
            </div>
            <div className="group text-center p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+50</div>
              <div className="text-sm text-gray-500 font-medium">Startups helped</div>
            </div>
          </div>
        </div>

        {/* Enhanced profile card with modern styling */}
        <div className="relative animate-fade-in delay-300">
          <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-500/10 p-8 max-w-md mx-auto border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-teal-100/50"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold tracking-wide">DK</span>
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Deena Kanth Pitta</h3>
              <p className="text-blue-600 font-semibold">Business Analytics & AI</p>
              <p className="text-gray-500 text-sm">UT Dallas Graduate Student</p>
              
              {/* Add social proof badges */}
              <div className="flex justify-center space-x-2 pt-4">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">Analytics Expert</span>
                <span className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full font-medium">AI Specialist</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced floating decorations */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/30 rounded-full opacity-80 animate-pulse delay-300"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-teal-200/30 to-yellow-200/20 rounded-full opacity-60 animate-pulse delay-700"></div>
          <div className="absolute top-8 -left-4 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-red-200/30 rounded-full opacity-50 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="group flex flex-col items-center text-gray-400 hover:text-gray-600 transition-all duration-300 p-4 rounded-2xl hover:bg-white/60 backdrop-blur-sm"
        >
          <span className="text-sm mb-2 font-medium">Scroll down</span>
          <div className="p-2 rounded-full border-2 border-current group-hover:scale-110 transition-transform duration-300">
            <ArrowDown className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
