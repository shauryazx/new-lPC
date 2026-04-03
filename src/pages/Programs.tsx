import { motion } from 'motion/react';
import { Zap, HardHat, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    description: 'A comprehensive study of electrical systems, power generation, distribution, and control. This program prepares students for careers in power plants, manufacturing, and electrical design.',
    icon: Zap,
    color: 'yellow',
    duration: '3 Years (6 Semesters)',
    intake: '90 Seats',
    highlights: [
      'Advanced Electrical Machines Lab',
      'Power Electronics & Control Systems',
      'Renewable Energy Systems Training',
      'Industrial Automation & PLC'
    ]
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    description: 'Focuses on the design, construction, and maintenance of the physical and naturally built environment. Students learn about structures, roads, bridges, and water systems.',
    icon: HardHat,
    color: 'orange',
    duration: '3 Years (6 Semesters)',
    intake: '45 Seats',
    highlights: [
      'Surveying & Leveling Fieldwork',
      'Structural Analysis & Design',
      'Concrete Technology Lab',
      'AutoCAD & Civil 3D Training'
    ]
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Covers the design, analysis, and manufacturing of mechanical systems. This program provides strong foundations in thermodynamics, fluid mechanics, and machine design.',
    icon: Settings,
    color: 'blue',
    duration: '3 Years (6 Semesters)',
    intake: '90 Seats',
    highlights: [
      'Modern Workshop & Machine Shop',
      'Automobile Engineering Lab',
      'CAD/CAM & CNC Programming',
      'Thermal Engineering Research'
    ]
  }
];

export default function Programs() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Academic Programs</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our diploma programs are designed to provide a perfect blend of theoretical knowledge and practical expertise, 
            ensuring our graduates are industry-ready from day one.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {programs.map((program, idx) => (
          <motion.div 
            key={program.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-1/2 space-y-8">
              <div className={`w-20 h-20 rounded-3xl bg-${program.color}-100 flex items-center justify-center`}>
                <program.icon className={`w-10 h-10 text-${program.color}-600`} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">{program.name}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">{program.description}</p>
              
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-lg font-bold text-slate-900">{program.duration}</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Annual Intake</div>
                  <div className="text-lg font-bold text-slate-900">{program.intake}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900">Key Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center space-x-3">
                      <CheckCircle2 className={`w-5 h-5 text-${program.color}-600`} />
                      <span className="text-slate-700 font-medium text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/admissions" 
                className={`inline-flex items-center px-8 py-4 rounded-xl font-bold text-white bg-${program.color}-600 hover:bg-${program.color}-700 transition-all shadow-xl shadow-${program.color}-500/20`}
              >
                Apply for {program.name}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className={`absolute -inset-4 bg-${program.color}-600/10 rounded-[3rem] blur-3xl`} />
              <img 
                src={`https://images.unsplash.com/photo-${idx === 0 ? '1581092160562-40aa08e78837' : idx === 1 ? '1503387762-592deb58ef4e' : '1537462715879-360eeb61a0ad'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`} 
                alt={program.name} 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Eligibility Section */}
      <section className="bg-slate-900 text-white py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Eligibility Criteria</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2.5rem] bg-slate-800/50 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Regular Entry (1st Year)</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-slate-300 text-lg">Passed 10th Standard (Secondary) from a recognized board.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-slate-300 text-lg">Minimum 35% marks in the qualifying examination.</span>
                </li>
              </ul>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-slate-800/50 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Lateral Entry (2nd Year)</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                  <span className="text-slate-300 text-lg">Passed 12th Standard (PCM) from a recognized board.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                  <span className="text-slate-300 text-lg">OR Passed 2-year ITI program in a relevant trade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
