
const Experience = () => {
  const experiences = [{
    title: "Student Worker",
    company: "Chick-fil-A | Compass Group USA | UT Dallas",
    location: "Dallas, TX", 
    duration: "Feb 2024 – Apr 2025",
    responsibilities: [
      "Assisted in managing daily inventory operations, reducing stock discrepancies by 15% through accurate logging and demand forecasting techniques",
      "Collaborated with logistics team to streamline back-of-house supply flow, improving order fulfillment time by 20% during peak operational hours", 
      "Analyzed weekly sales and waste data to identify operational trends, helping reduce food waste by 12% through optimized preparation planning and shelf-life tracking"
    ]
  }, {
    title: "Business Operations Specialist",
    company: "o9 Solutions, Inc.",
    location: "Dallas, TX", 
    duration: "June 2022 – July 2023",
    projects: [{
      name: "New Balance",
      details: "Forecasted $45M in sales, optimized inventory management, and built comprehensive KPIs for enhanced decision-making"
    }, {
      name: "Pubtex",
      details: "Forecasted $55M in sales, developed critical KPIs, and boosted order fulfillment efficiency across multiple channels"
    }]
  }];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Twinkling background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-sky-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-sky-200 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-30" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-sky-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping opacity-50" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Demonstrated expertise in business operations, demand forecasting, and data-driven decision-making.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-8 hover:shadow-md hover:border-gray-300 transition-all hover:scale-[1.01] transform duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-sky-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-700">{exp.location}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-sky-50 text-sky-700 border border-sky-200 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {exp.responsibilities && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.projects && (
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">Key Projects:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border border-gray-300 rounded-lg p-6 hover:border-sky-300 transition-colors bg-white hover:shadow-sm transform hover:scale-[1.02] duration-200">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">{project.name}</h5>
                        <p className="text-gray-700 leading-relaxed">{project.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
