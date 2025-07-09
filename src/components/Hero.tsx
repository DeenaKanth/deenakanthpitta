import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent mx-[2px] px-[2px]">Pitta Deena Kanth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Data Analytics Professional & Business Intelligence Specialist
              </p>
              <p className="text-lg text-gray-500 max-w-lg">
                Transforming complex data into actionable insights with expertise in SQL, Python, Tableau, and Power BI. 
                Passionate about driving data-driven decision making and business growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-sky-500 hover:border-sky-600" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              
              <Button variant="outline" className="px-6 py-3 rounded-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors" onClick={() => window.open('https://drive.google.com/file/d/1JyeRGzUG3Fhs2_22rDmr4eT8YpFS9Wt3/view?usp=sharing', '_blank')}>  
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              <Button variant="outline" className="px-6 py-3 rounded-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors" onClick={() => window.open('https://www.linkedin.com/in/deena-kanth-pitta/', '_blank')}>
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn  
              </Button>
              
              <Button variant="outline" className="px-6 py-3 rounded-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors" onClick={() => window.open('https://github.com/DeenaKanth/', '_blank')}>
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-1 shadow-2xl">
                <img src="https://i.postimg.cc/CL1qkh6k/IMG-6940-Snapseed-Copy.jpg" alt="Deena Kanth Pitta" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">Available</div>
                  <div className="text-sm text-sky-500">for opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;