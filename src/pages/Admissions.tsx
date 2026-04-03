import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Zap,
  Clock,
  Calendar
} from 'lucide-react';

const steps = [
  { 
    title: 'Visit Campus', 
    description: 'Visit our Alwar campus for a detailed tour and counseling session with our experts.',
    icon: MapPin,
    color: 'blue'
  },
  { 
    title: 'Submit Documents', 
    description: 'Provide your 10th/12th/ITI marksheets, photographs, and identity proof.',
    icon: FileText,
    color: 'indigo'
  },
  { 
    title: 'Verification', 
    description: 'Our admission team will verify your eligibility and documents.',
    icon: CheckCircle2,
    color: 'green'
  },
  { 
    title: 'Confirm Admission', 
    description: 'Pay the initial fees to secure your seat in your preferred branch.',
    icon: GraduationCap,
    color: 'amber'
  }
];

const scholarships = [
  {
    title: 'SC/ST/SBC Scholarship',
    description: '100% tuition fee waiver for eligible students from SC, ST, and SBC categories.',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Merit-Based Scholarship',
    description: 'Special fee concessions for students scoring above 75% in their 10th or 12th board exams.',
    icon: Award,
    color: 'indigo'
  }
];

import { Users, Award } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Admissions Open 2026-27</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Take the first step towards a successful engineering career. 
            Join Alwar's most industry-aligned polytechnic college.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Apply</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-100 -z-10" />
              )}
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all text-center">
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-slate-50 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Financial Support & Scholarships</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We believe that financial constraints should never hinder a student's potential. 
                Laxmidhar Polytechnic College offers comprehensive scholarship programs for deserving students.
              </p>
              <div className="space-y-6">
                {scholarships.map((s, idx) => (
                  <div key={idx} className="flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className={`p-4 bg-${s.color}-50 rounded-2xl`}>
                      <s.icon className={`w-6 h-6 text-${s.color}-600`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Scholarship" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/50 skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch with Admissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-5 bg-white/10 rounded-2xl">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold">Call Us</h4>
                <div className="flex flex-col text-blue-200 text-lg">
                  <a href="tel:8824351992" className="hover:text-white transition-colors">8824351992</a>
                  <a href="tel:9799707879" className="hover:text-white transition-colors">9799707879</a>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-5 bg-white/10 rounded-2xl">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold">Email Us</h4>
                <a href="mailto:laxmindharpoly@gmail.com" className="text-blue-200 text-lg hover:text-white transition-colors">
                  laxmindharpoly@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-5 bg-white/10 rounded-2xl">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold">Visit Us</h4>
                <p className="text-blue-200 text-lg">IN-3, M.I.A., RIICO, Alwar-301030 (Raj.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
