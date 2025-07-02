import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 font-bold">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">pittadeenakanth@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">(945) 274-5002</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Houston, TX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-900/30 border border-purple-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <a href="https://linkedin.com/in/deena-kanth-pitta" className="text-red-400 hover:text-red-300 hover:underline transition-colors">
                    linkedin.com/in/deena-kanth-pitta
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Open to Opportunities</h3>
              <p className="text-gray-300 text-sm">Currently seeking full-time opportunities in Data Analytics, Business Analytics, Data Science, and AI roles. Available for consulting projects and collaborations.</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input id="name" type="text" value={formData.name} onChange={e => setFormData(prev => ({
                ...prev,
                name: e.target.value
              }))} placeholder="Your full name" required className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData(prev => ({
                ...prev,
                email: e.target.value
              }))} placeholder="your.email@example.com" required className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData(prev => ({
                ...prev,
                message: e.target.value
              }))} placeholder="Tell me about your project or opportunity..." required className="w-full h-32 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500" />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white border-0">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;