
const Projects = () => {
  const projects = [
    {
      title: "Conversational AI Chatbot",
      description: "Developed an NLP and ML-powered chatbot that reduced response time by 30% and boosted customer satisfaction by 40%",
      techStack: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      impact: "30% faster response time, 40% improved satisfaction"
    },
    {
      title: "School Admissions Decision Model",
      description: "Built a comprehensive SQL and R-based regression model that improved admission prediction accuracy by 15%",
      techStack: ["SQL", "R", "Statistical Modeling", "Data Analysis"],
      impact: "15% improved prediction accuracy"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Innovative solutions combining AI, analytics, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-gray-600 transition-all hover:-translate-y-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-red-900/30 text-red-300 border border-red-500/30 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 font-semibold text-sm">{project.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
