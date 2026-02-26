import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import MotivationalSpeaking from "./components/MotivationSpeaking";
import Gallery from "./components/Gallery";
import WhatsAppFooterButton from "./components/WhatsappButton";
import RecentActivities from "./components/RecentActivities";
import EventPopup from "./components/EventPopUp";

import { Toaster } from "react-hot-toast";
import Events from "./components/Events";
import EventGallery from "./components/EventGallery";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

/* HOME PAGE */
function Home() {
  const isDesktop = useIsDesktop();
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && <EventPopup onClose={() => setShowPopup(false)} />}

      <Hero />
      <About />
      <Services />
      <MotivationalSpeaking />
      <RecentActivities />
      <Testimonials />
      {isDesktop && <Gallery />}
      <BookingForm />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventGallery />} />
      </Routes>

      <Footer />
      <WhatsAppFooterButton />
      <Toaster />
    </Router>
  );
}