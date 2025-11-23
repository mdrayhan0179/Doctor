import { Stethoscope, Shield, Activity, Video, User, Award, LucideIcon } from 'lucide-react';

export const NAV_ITEMS = ['home', 'about', 'services', 'appointments', 'contact'];

export const EXPERTISE_TAGS = [
  'Internal Medicine', 
  'Diabetes Management', 
  'Hypertension', 
  'Infectious Diseases', 
  'Geriatric Medicine', 
  'Preventive Cardiology'
];

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export const SERVICES: Service[] = [
  { title: "Internal Medicine", desc: "Expert diagnosis and management of complex, multi-system adult diseases with precision and care.", icon: Stethoscope, color: "text-blue-400" },
  { title: "Advanced Diabetology", desc: "Holistic care for Type 1 & 2 Diabetes, focusing on blood sugar control and preventing long-term complications.", icon: Shield, color: "text-green-400" },
  { title: "Cardiovascular Health", desc: "Management of hypertension, dyslipidemia, and risk stratification for heart diseases to ensure heart health.", icon: Activity, color: "text-purple-400" },
  { title: "Infectious Diseases", desc: "Specialized treatment for viral fevers, bacterial infections, tuberculosis, and tropical diseases.", icon: Video, color: "text-indigo-400" },
  { title: "Respiratory Medicine", desc: "Care for asthma, COPD, bronchitis, and other acute/chronic respiratory tract infections.", icon: User, color: "text-orange-400" },
  { title: "Preventive Health", desc: "Comprehensive annual health checkups and screenings for early disease detection and longevity.", icon: Award, color: "text-cyan-400" }
];
