
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: "Email Us",
      details: "support@shopstyle.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Visit Us",
      details: "123 Main Street, New York",
      description: "NY 10001, USA"
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "Working Hours",
      details: "Monday to Friday",
      description: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question about products, delivery, or anything else, our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                        <p className="text-gray-900 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={16} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Map and Additional Info */}
              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-md h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894598!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1624384347314!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">What are your shipping options?</h4>
                        <p className="text-gray-600 text-sm">We offer standard (3-5 days), express (1-2 days), and next-day shipping options.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">How can I track my order?</h4>
                        <p className="text-gray-600 text-sm">You can track your order through the "Orders" section in your account dashboard.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">What is your return policy?</h4>
                        <p className="text-gray-600 text-sm">We offer a 30-day return policy for most items. See our Returns page for details.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-purple-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in Touch</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest products, promotions, and updates.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
