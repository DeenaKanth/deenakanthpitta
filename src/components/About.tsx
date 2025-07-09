
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">I'm Deena Kanth Pitta, a passionate Business Analytics and AI professional who recently graduated with a Master's degree from UT Dallas. </p>
              <p className="text-lg text-gray-700 leading-relaxed">With a strong foundation in data analytics and a keen interest in intelligent business solutions, my expertise spans demand planning, supply planning, s&op planning, supply chain optimization, and KPI-driven performance enhancement. I've led high-impact forecasting projects for multi-million dollar clients and developed AI-powered systems that have significantly improved operational efficiency. My goal is to transform complex data into actionable insights that support strategic decision-making and drive measurable business outcomes.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Master's in Business Analytics and AI</h4>
                  <p className="text-gray-700">UT Dallas (2023–2025)</p>
                  <p className="text-sm text-gray-600">GPA: 3.68 | Dean's Excellence Scholarship</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Bachelor's in Mechanical Engineering</h4>
                  <p className="text-gray-700">NIT Warangal (2018–2022)</p>
                  <p className="text-sm text-gray-600">GPA: 3.77</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl font-bold text-red-600">$100M+</div>
                <div className="text-sm text-gray-600">Sales Forecasted</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-600">Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
