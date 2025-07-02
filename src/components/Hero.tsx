
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hello
              <span className="block text-4xl lg:text-5xl text-gray-600 font-normal mt-2">
                — I'm Deena, a design wizard
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Business Analytics & AI Professional | Data-Driven Decision Maker
            </p>
            
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Graduate student at UT Dallas with hands-on experience in analytics, forecasting, and business operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">+200</div>
              <div className="text-sm text-gray-500">Projects completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">+50</div>
              <div className="text-sm text-gray-500">Startups helped</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold">DK</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deena Kanth Pitta</h3>
              <p className="text-gray-600 text-sm">Business Analytics & AI</p>
              <p className="text-gray-500 text-sm">UT Dallas Graduate Student</p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-100 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
