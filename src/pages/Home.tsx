import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Trophy, 
  Users, 
  Zap, 
  Building2, 
  Settings, 
  HardHat,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

const stats = [
  { label: 'Highest Package', value: '10 LPA', icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Average Package', value: '3.6 LPA', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Recent Results', value: '100%', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Industry Partners', value: '50+', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const recruiters = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tata_logo.svg/1200px-Tata_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Larsen_%26_Toubro_logo.svg/2560px-Larsen_%26_Toubro_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Maruti_Suzuki_logo.svg/2560px-Maruti_Suzuki_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Honda_logo.svg/2560px-Honda_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ashok_Leyland_logo.svg/2560px-Ashok_Leyland_logo.svg.png',
];

const features = [
  {
    title: 'Zero Fees Scholarship',
    description: 'Zero fees for ST/SC/SBC and students scoring above 75%. We ensure financial status never blocks talent.',
    icon: GraduationCap,
    color: 'blue'
  },
  {
    title: '12th PCM Equivalence',
    description: 'Get an additional 12th PCM marksheet from RBSE by passing just one English paper alongside your diploma.',
    icon: BookOpen,
    color: 'indigo'
  },
  {
    title: 'J.En. Recruitment Prep',
    description: 'Our curriculum is designed to help students qualify for Junior Engineer posts in state and central government departments.',
    icon: Zap,
    color: 'amber'
  }
];

const branches = [
  { name: 'Electrical', icon: Zap, color: 'bg-yellow-500' },
  { name: 'Civil', icon: HardHat, color: 'bg-orange-500' },
  { name: 'Mechanical', icon: Settings, color: 'bg-blue-500' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="College Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">Approved by AICTE & Affiliated to BTER</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Building Careers with <span className="text-blue-400">Technical Excellence</span>
            </h1>
            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl">
              Delivering 100% results and premier placements in Alwar's industrial heart. 
              Join the next generation of engineering leaders.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/admissions" 
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/programs" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Explore Branches
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 grid grid-cols-2 gap-8"
          >
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Mobile Section */}
      <section className="lg:hidden bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-slate-50">
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Our Top Recruiters</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {recruiters.map((logo, idx) => (
              <img 
                key={idx} 
                src={logo} 
                alt="Recruiter" 
                className="h-8 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Laxmidhar?</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Branches</h2>
              <p className="text-slate-400 text-lg">
                Specialized diploma programs designed for the modern industrial landscape. 
                Practical-first learning approach with state-of-the-art labs.
              </p>
            </div>
            <Link to="/programs" className="text-blue-400 font-bold flex items-center hover:text-blue-300 transition-colors">
              View All Programs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-slate-800/50 border border-slate-700 p-10 hover:border-blue-500/50 transition-all">
                <div className={`w-14 h-14 ${branch.color} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                  <branch.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{branch.name}</h3>
                <p className="text-slate-400 mb-8">Comprehensive training in {branch.name.toLowerCase()} engineering principles and industrial applications.</p>
                <div className="flex items-center text-sm font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Course Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Engineering Journey?</h2>
                <ul className="space-y-4 mb-10">
                  {[
                    'Direct 2nd Year Entry for ITI & 12th PCM',
                    'Industry-Ready Practical Training',
                    'Strategic Location in MIA RIICO Hub',
                    '100% Placement Assistance'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0" />
                      <span className="text-lg font-medium text-blue-50">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/admissions" 
                  className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
                >
                  Apply for Admission
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-20" />
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Students" 
                    className="rounded-3xl shadow-2xl relative z-10 border-4 border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
