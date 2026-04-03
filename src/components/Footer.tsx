import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap, ChevronRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Portals',
    links: [
      { name: 'College Profile', path: '/about' },
      { name: 'Academic Streams', path: '/programs' },
      { name: 'Enrollment Center', path: '/admissions' },
      { name: 'Mandatory Disclosures', path: '/disclosure' },
      { name: 'FAQs', path: '/faq' },
    ],
  },
  {
    title: 'Leadership',
    links: [
      { name: "Chairman's Perspective", path: '/desk/chairman' },
      { name: "Director's Message", path: '/desk/director' },
      { name: "Principal's Desk", path: '/desk/principal' },
      { name: 'Heads of Departments', path: '/desk/hod' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12">
                <img 
                  src="/college-logo.png" 
                  alt="Laxmidhar Polytechnic College Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">Laxmidhar Polytechnic College</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-slate-400">
              A premier institution dedicated to technical proficiency and vocational innovation in Alwar. 
              Preparing future engineering professionals with industrial excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="flex items-center text-base hover:text-blue-400 transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Campus Reach</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="p-2 bg-slate-800 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-base text-slate-400">
                  IN-3, M.I.A., RIICO (Near Tarni Cancer Hospital), Alwar-301030 (Raj.)
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="p-2 bg-slate-800 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col text-base">
                  <a href="tel:8824351992" className="hover:text-blue-400 transition-colors">8824351992</a>
                  <a href="tel:9799707879" className="hover:text-blue-400 transition-colors">9799707879</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="p-2 bg-slate-800 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <a href="mailto:laxmindharpoly@gmail.com" className="text-base hover:text-blue-400 transition-colors">
                  laxmindharpoly@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Laxmidhar Polytechnic College. AICTE Approved & BTER Affiliated. Reg. No. 13/alwar/1999.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
