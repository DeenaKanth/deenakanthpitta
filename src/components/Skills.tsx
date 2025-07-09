const Skills = () => {
  const skillCategories = [{
    title: "Analytics & Programming",
    skills: ["Python", "SQL", "R", "SAS"]
  }, {
    title: "Visualization & BI", 
    skills: ["Tableau", "Power BI", "Excel"]
  }, {
    title: "Cloud & Big Data",
    skills: ["AWS", "Cloudera"]
  }, {
    title: "Databases",
    skills: ["Oracle", "MongoDB", "DB2"]
  }];
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Comprehensive expertise across analytics, visualization, cloud platforms, and data management</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-gray-300 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2 rounded-full" style={{
                  width: '85%'
                }}></div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Programming Languages</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Tools & Platforms</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">3+</div>
              <div className="text-sm text-gray-600">Database Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;
