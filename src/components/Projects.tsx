
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Innovative solutions combining AI, analytics, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-semibold text-sm">{project.impact}</span>
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
