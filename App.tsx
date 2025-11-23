import React, { useState } from 'react';
import { Appointment, FormData } from './types';
import BackgroundCanvas from './components/BackgroundCanvas';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AppointmentSection from './components/AppointmentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', countryCode: '+91', date: '', time: '', reason: ''
  });
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.reason) {
      return;
    }
    const newAppointment: Appointment = {
      id: Date.now(),
      ...formData,
      fullPhone: `${formData.countryCode} ${formData.phone}`,
      status: 'Pending Confirmation'
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({ name: '', email: '', phone: '', countryCode: '+91', date: '', time: '', reason: '' });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <BackgroundCanvas />
      <Header activeSection={activeSection} onScrollToSection={scrollToSection} />
      <main>
        <HeroSection onScrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <AppointmentSection
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          showSuccess={showSuccess}
          appointments={appointments}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
