import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Calendar,
  Home,
  Settings,
  User,
  MessageSquare,
  Radio,
  Image,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* REMOVE booking from normal nav items */
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Settings },
    { id: "activities", label: "Recent Activities", icon: Radio },
    { id: "events", label: "Events", icon: Image, route: "/events" },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  ];

  useEffect(() => {
    if (location.pathname.startsWith("/events")) {
      setActiveSection("events");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.route) {
      navigate(item.route);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    setIsMenuOpen(false);
    setActiveSection(item.id);
  };

  /* Special Book Session handler */
  const handleBookingClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <img className="w-16 scale-150" src="https://res.cloudinary.com/dczt652u9/image/upload/v1771305636/Jazz_Logo_5_jhipxt.png" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-semibold transition
                    ${
                      activeSection === item.id
                        ? "bg-amber-50 text-amber-600 shadow"
                        : "text-gray-700 hover:bg-amber-50"
                    }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* GOLD CTA BUTTON */}
            <button
              onClick={handleBookingClick}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-amber-300/50"
            >
              <Calendar size={16} />
              <span>Book Session</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold hover:bg-amber-50"
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}

            {/* MOBILE CTA BUTTON */}
            <div className="px-4 mt-3">
              <button
                onClick={handleBookingClick}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Session
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;