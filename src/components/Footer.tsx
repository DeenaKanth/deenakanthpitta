const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DK</span>
              </div>
              <span className="font-semibold">Deena Kanth Pitta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Business Analytics & AI Professional passionate about data-driven solutions and innovative technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {item}
                </button>)}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">pittadeenakanth@gmail.com</p>
              <p className="text-gray-400">(945) 274-5002</p>
              <p className="text-gray-400">Dallas, TX</p>
              <a href="https://linkedin.com/in/deena-kanth-pitta" className="text-blue-400 hover:text-blue-300 transition-colors block">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Deena Kanth Pitta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;