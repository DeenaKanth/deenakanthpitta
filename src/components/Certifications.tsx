
const Certifications = () => {
  const certifications = [
    {
      name: "Supply Chain Foundations",
      provider: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/40048633b3e9722eb68f07ce1b35bbc05ea4657845d9485ab641eb367574e57a?trk=share_certificate"
    },
    {
      name: "Google Analytics",
      provider: "Google Skillshop",
      link: "https://skillshop.credential.net/8548dab6-b683-435a-80a2-64eedaf90791#acc.fVIuo7Dd"
    },
    {
      name: "The Complete SQL Bootcamp: Go from Zero to Hero",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-ea3609e1-418d-4719-adb5-89a9ec47acd8/"
    },
    {
      name: "SQL for Data Science",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/4D9SF83XHGFN"
    },
    {
      name: "Machine Learning",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/XV65U2DCLNUD"
    }
  ];

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across analytics, data science, and business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => handleCertificateClick(cert.link)}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">🏆</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.provider}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">View Certificate</span>
                    <span className="text-blue-600">→</span>
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

export default Certifications;
