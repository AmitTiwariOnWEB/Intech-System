import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from './constants/data';
import { cn } from './utils/cn';

const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Shield className={className} />;
  return <IconComponent className={className} />;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    "Telecom",
    "Surveillance Solutions",
    "Access Control and Time Attendance",
    "Board Room Solutions",
    "Apartment Solution",
    "IP Phones"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            isScrolled ? "text-slate-900" : "text-white"
          )}>INTECH SYSTEM</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-blue-500 transition-colors",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}

          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button
              className={cn(
                "text-sm font-medium hover:text-blue-500 transition-colors flex items-center gap-1 cursor-pointer",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              Products
              <ChevronDown className={cn("w-4 h-4 transition-transform", isProductsDropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isProductsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                >
                  {products.map((product) => (
                    <a
                      key={product}
                      href="#services"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {product}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-blue-500 transition-colors",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-200 cursor-pointer"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 font-medium text-lg hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              
              <div className="flex flex-col gap-2">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Products</div>
                {products.map((product) => (
                  <a
                    key={product}
                    href="#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-600 font-medium pl-4 border-l-2 border-slate-100 hover:text-blue-600 transition-colors"
                  >
                    {product}
                  </a>
                ))}
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 font-medium text-lg hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  scrollToContact();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-100 text-sm font-medium tracking-wide">TRUSTED SECURITY PARTNER</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Securing Your <span className="text-blue-400 underline decoration-blue-400/30 underline-offset-8">Future</span> with Technology
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            INTECH SYSTEM provides cutting-edge IT infrastructure, advanced security systems, and smart automation for a safer tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group cursor-pointer"
            >
              Explore Our Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <button 
        onClick={() => scrollTo('services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-blue-400 transition-colors">
          <div className="w-1 h-2 bg-white group-hover:bg-blue-400 rounded-full transition-colors" />
        </div>
      </button>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive IT & Security Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of services designed to keep your business running smoothly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <LucideIcon name={service.icon} className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold group/link">
                Learn more
                <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '300+' },
    { label: 'Expert Team', value: '25+' },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Expert Technicians"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Certified</div>
                  <div className="text-slate-500">Security Experts</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">About INTECH SYSTEM</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Your Trusted Security and IT Partner</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded on the principles of integrity and innovation, INTECH SYSTEM has been at the forefront of the security and IT industry for over a decade. We specialize in providing bespoke solutions that cater to the unique needs of our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div id="projects" className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Our Core Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   'Critical Asset Protection',
                   'Enterprise IT Infrastructure',
                   'Cloud Security Integration',
                   '24/7 Monitoring Services'
                 ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                     <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                       <CheckCircle2 className="w-3 h-3 text-blue-600" />
                     </div>
                     <span className="text-slate-700 font-medium">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">
              Company History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready to get started?</h3>
            <p className="text-slate-400 text-lg mb-10">
              Whether you have a question about our services or need a quote for a new project, our team is ready to help.
            </p>

            <div className="space-y-6">
              <a href="tel:+919876543210" className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Call Us</div>
                  <div className="text-slate-400 group-hover:text-blue-300 transition-colors">+91 98765 43210</div>
                </div>
              </a>
              <a href="mailto:info@intechsystem.com" className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Email Us</div>
                  <div className="text-slate-400 group-hover:text-blue-300 transition-colors">info@intechsystem.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Our Office</div>
                  <div className="text-slate-400 group-hover:text-blue-300 transition-colors">123 Business Hub, MG Road, Mumbai, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-slate-100 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-slate-100 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Service Interested In</label>
                <select className="w-full bg-slate-100 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none cursor-pointer">
                  <option>Security Systems</option>
                  <option>IT Infrastructure</option>
                  <option>Home Automation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Your Message</label>
                <textarea required className="w-full bg-slate-100 border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none min-h-[150px]" placeholder="How can we help you?"></textarea>
              </div>
              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className={cn(
                  "w-full font-bold py-4 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2",
                  formState === 'idle' ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30" : 
                  formState === 'submitting' ? "bg-slate-400 text-white cursor-not-allowed" : 
                  "bg-green-600 text-white"
                )}
              >
                {formState === 'idle' && "Send Message"}
                {formState === 'submitting' && (
                  <>
                    <Icons.Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <Icons.Check className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">INTECH SYSTEM</span>
            </div>
            <p className="mb-6">
              Providing top-tier security and IT infrastructure solutions for residential and commercial clients since 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map(s => (
                <li key={s.id}><a href="#" className="hover:text-blue-400 transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest security tips and tech trends.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border-none rounded-lg p-3 w-full text-white outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} INTECH SYSTEM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import { Chatbot } from './components/Chatbot';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { MapSection } from './components/MapSection';
import { TrustSection } from './components/TrustSection';
import { IndustriesSection } from './components/IndustriesSection';

const Features = () => {
  const features = [
    { title: '24/7 Monitoring', icon: 'Activity', desc: 'Continuous surveillance and instant alert systems for your peace of mind.' },
    { title: 'Cloud Backup', icon: 'Cloud', desc: 'Secure cloud storage for your footage and data, accessible from anywhere.' },
    { title: 'Smart Integration', icon: 'Smartphone', desc: 'Control your entire security stack and automation from your phone.' },
    { title: 'Expert Support', icon: 'UserCheck', desc: 'On-site and remote technical support within 24 hours of reporting.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[100px] -ml-48 -mb-48 rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Next-Gen Technology</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Choose INTECH SYSTEM?</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We don't just install systems; we build comprehensive safety ecosystems. Our solutions are designed to be proactive rather than reactive.
              </p>
              <div className="space-y-4">
                {['Industry Leading Hardware', 'Zero Downtime Guarantee', 'Free Annual Maintenance', 'Localized Technical Support'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <LucideIcon name={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <About />
      <Features />
      <IndustriesSection />
      <Testimonials />
      <FAQ />
      <MapSection />
      <Contact />
      <Footer />
      
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
