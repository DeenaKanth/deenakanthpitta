
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_e96fvyr', // Service ID
        'template_k3mdtsv', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'w0i-y0Bbg8ysVoAvM' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sky-50 border border-sky-200 rounded-lg flex items-center justify-center">
                  <span className="text-sky-600 font-bold">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">pittadeenakanth@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sky-50 border border-sky-200 rounded-lg flex items-center justify-center">
                  <span className="text-sky-600 font-bold">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">(945) 274-5002</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-700">Dallas, TX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                  <a href="https://linkedin.com/in/deena-kanth-pitta" className="text-sky-500 hover:text-sky-400 hover:underline transition-colors">
                    linkedin.com/in/deena-kanth-pitta
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Open to Opportunities</h3>
              <p className="text-gray-700 text-sm">Currently seeking full-time opportunities in Data Analytics, Business Analytics, Data Science, and AI roles. Available for consulting projects and collaborations.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} 
                  placeholder="Your full name" 
                  required 
                  className="w-full bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-sky-500" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} 
                  placeholder="your.email@example.com" 
                  required 
                  className="w-full bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-sky-500" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  value={formData.message} 
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} 
                  placeholder="Tell me about your project or opportunity..." 
                  required 
                  className="w-full h-32 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-sky-500" 
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white border-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
