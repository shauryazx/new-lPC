import { motion } from 'motion/react';
import { Target, Eye, Award, History, Users, Building2 } from 'lucide-react';

const values = [
  { 
    title: 'Our Mission', 
    description: 'To provide high-quality technical education that empowers students with practical skills and ethical values for a successful engineering career.',
    icon: Target,
    color: 'blue'
  },
  { 
    title: 'Our Vision', 
    description: 'To be a center of excellence in technical education, fostering innovation and industrial leadership in the Alwar region and beyond.',
    icon: Eye,
    color: 'indigo'
  },
  { 
    title: 'Our Values', 
    description: 'Integrity, excellence, and inclusivity. We believe in providing equal opportunities for all students to excel in their chosen fields.',
    icon: Award,
    color: 'amber'
  }
];

export default function About() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">About Laxmidhar Polytechnic College</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Established with a vision to bridge the gap between academic learning and industrial requirements, 
            Laxmidhar Polytechnic College has been a pioneer in technical education since 1999.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="College Building" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-[3rem] -z-0 hidden md:block" />
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                <History className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Our Legacy</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Decades of Excellence in Technical Training</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Laxmidhar Polytechnic College is approved by AICTE, New Delhi and affiliated with the Board of Technical Education Rajasthan (BTER), Jodhpur. 
                Located in the industrial hub of MIA RIICO, Alwar, we provide students with unparalleled exposure to real-world engineering environments.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">25+</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="p-3 bg-indigo-50 rounded-xl">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">5000+</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Alumni</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${value.color}-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <value.icon className={`w-8 h-8 text-${value.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
