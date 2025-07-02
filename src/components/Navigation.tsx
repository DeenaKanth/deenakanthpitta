
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DK</span>
            </div>
            <span className="font-semibold text-white">Deena Kanth Pitta</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-red-400 ${
                  activeSection === item.id ? "text-red-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
