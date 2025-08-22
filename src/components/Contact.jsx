import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: contact.email,
      link: `mailto:${contact.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: contact.phone,
      link: `tel:${contact.phone}`,
      description: 'Give me a call during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contact.location,
      link: null,
      description: 'Currently based in'
    }
  ];

  const socialPlatforms = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/alexjohnson' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/alexjohnson' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/alexjohnson' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              {contact.availability}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development. 
                Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {method.title}
                        </h4>
                        <p className="text-slate-400 text-sm mb-2">
                          {method.description}
                        </p>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-slate-300">{method.value}</span>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialPlatforms.map((platform, index) => {
                  const IconComponent = platform.icon;
                  return (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 transform"
                    >
                      <IconComponent className="w-5 h-5 text-slate-300 hover:text-blue-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;