import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Calendar, Clock } from 'lucide-react';
import WhatsAppFooterButton from './WhatsappButton';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Session', href: '#booking' }
  ];

  const services = [
    'Accountability Partner',
    'Mental Strengthening',
    'Confidence Building',
    'Performance Outlook Maintenance',
    'Elite Mentorship Program',
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/repswithjazz', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jazz-ferguson-5258a8219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: Linkedin },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-stone-100 to-amber-50 border-t border-amber-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Jazz Ferguson</h3>
                <p className="text-sm text-gray-600">Pro Basketball Player • Life Coach • Mentor</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Helping ambitious individuals develop the champion mindset needed for extraordinary success. 
              Your victory journey begins with developing the mental toughness of a champion.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10  bg-stone-100 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-amber-700 hover:shadow-lg transition-all duration-300"
                  aria-label={social.name}
                  target='_blank'
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 cursor-pointer hover:text-amber-700 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5  text-amber-700" />
                <div>
                  <p className="text-gray-900 font-medium">+971582619895</p>
                  <p className="text-sm text-gray-600">Call or text</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-700" />
                <div>
                  <p className="text-gray-900 font-medium">repswithjazz@gmail.com</p>
                  <p className="text-sm text-gray-600">I respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-700" />
                <div>
                  <p className="text-gray-900 font-medium">UAE, Dubai</p>
                  <p className="text-sm text-gray-600">Virtual sessions worldwide</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-stone-100 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-amber-700" />
                <h5 className="font-semibold text-gray-900 text-sm">Office Hours</h5>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                <p>Sat: 10:00 AM - 2:00 PM PST</p>
                <p>Sun: By appointment only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Reps With Jazz Life Coaching. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed and Insured | Jay Shetty Certified Professional Coach | Professional Athlete
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              
              <button
                onClick={() => scrollToSection('#booking')}
                className="bg-gradient-to-r from-amber-600 md:hidden to-yellow-600 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-1 "
              >
                <Calendar className="w-4 h-4" />
                <span>Connect</span>
              </button>
               <button
                onClick={() => scrollToSection('#booking')}
                className="bg-gradient-to-r from-amber-600 hidden  to-yellow-600 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 md:flex md:items-center space-x-1 "
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center space-x-8 text-xs text-gray-500">
            <div className="text-center">
              <div className="font-semibold text-gray-700"> Pro Athlete</div>
              <div>15 Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-700">Jay Shetty Certified</div>
              <div>Professional Coach</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-700">Licensed & Insured</div>
              <div>Professional Services</div>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;