const Experience = () => {
  const experiences = [{
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
  return <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Demonstrated expertise in business operations, demand forecasting, and data-driven decision-making.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-gray-600 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-red-400 font-semibold">{exp.company}</p>
                  <p className="text-gray-300">{exp.location}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-red-900/30 text-red-300 border border-red-500/30 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Key Projects:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.projects.map((project, projectIndex) => <div key={projectIndex} className="border border-gray-600 rounded-lg p-6 hover:border-red-500/50 transition-colors bg-gray-800/50">
                      <h5 className="text-lg font-semibold text-white mb-3">{project.name}</h5>
                      <p className="text-gray-300 leading-relaxed">{project.details}</p>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;