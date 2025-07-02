
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm Deena Kanth Pitta, a passionate Business Analytics and AI professional currently pursuing my Master's degree at UT Dallas. With a strong foundation in Mechanical Engineering from NIT Warangal and hands-on industry experience, I bring a unique perspective to data-driven decision making.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My expertise lies in demand forecasting, supply chain operations, and developing intelligent solutions that drive business growth. I've successfully managed multi-million dollar forecasting projects and built AI systems that improve operational efficiency.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Master's in Business Analytics and AI</h4>
                  <p className="text-gray-600">UT Dallas (2023–2025)</p>
                  <p className="text-sm text-gray-500">GPA: 3.68 | Dean's Excellence Scholarship</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Bachelor's in Mechanical Engineering</h4>
                  <p className="text-gray-600">NIT Warangal (2018–2022)</p>
                  <p className="text-sm text-gray-500">GPA: 3.77</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">$100M+</div>
                <div className="text-sm text-gray-600">Sales Forecasted</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">40%</div>
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
