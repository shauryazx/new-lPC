import { useParams, Navigate } from 'react-router-dom';
import { Quote, GraduationCap, Award, BookOpen, User } from 'lucide-react';

const leadershipData: Record<string, any> = {
  chairman: {
    title: "Chairman's Perspective",
    name: "Shri Laxmidhar Ji",
    role: "Chairman, Laxmidhar Polytechnic College",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Our goal is to create not just engineers, but innovators who can lead the industrial revolution in Rajasthan.",
    content: [
      "Welcome to Laxmidhar Polytechnic College. Since our inception, we have been committed to providing affordable yet high-quality technical education to the youth of Alwar.",
      "We believe that technical proficiency combined with strong ethical values is the key to personal and national growth. Our campus is designed to be a nurturing ground for talent, where students from all backgrounds can excel.",
      "I invite you to be a part of our journey towards excellence."
    ]
  },
  director: {
    title: "Director's Message",
    name: "Dr. R.K. Sharma",
    role: "Director, Laxmidhar Polytechnic College",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Bridging the gap between theory and practice is our core philosophy.",
    content: [
      "At Laxmidhar Polytechnic College, we focus on industry-aligned curriculum and hands-on training. Our strategic location in the MIA RIICO industrial hub gives our students a unique advantage.",
      "We are constantly updating our labs and teaching methodologies to keep pace with the rapidly evolving engineering landscape.",
      "Our 100% placement record is a testament to the hard work of our faculty and the talent of our students."
    ]
  },
  principal: {
    title: "Principal's Desk",
    name: "Prof. S.K. Gupta",
    role: "Principal, Laxmidhar Polytechnic College",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Academic excellence is the foundation of a successful career.",
    content: [
      "As the Principal, my focus is on ensuring a disciplined and productive academic environment. We follow the BTER Jodhpur curriculum strictly while adding our own practical modules.",
      "We encourage our students to participate in workshops, industrial visits, and technical competitions to broaden their horizons.",
      "Our faculty members are not just teachers, but mentors who guide students at every step."
    ]
  },
  hod: {
    title: "Heads of Departments",
    name: "Department Heads",
    role: "Laxmidhar Polytechnic College Academic Leadership",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Specialized guidance for specialized engineering branches.",
    content: [
      "Our HODs for Electrical, Civil, and Mechanical departments bring years of academic and industrial experience to the table.",
      "Each department operates with a focus on branch-specific excellence, ensuring that students get the best possible training in their chosen field.",
      "From lab supervision to project guidance, our HODs are deeply involved in the student's learning journey."
    ]
  }
};

export default function LeadershipDesk() {
  const { role } = useParams();
  const data = role ? leadershipData[role] : null;

  if (!data) return <Navigate to="/" />;

  return (
    <div className="py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-3xl" />
              <img 
                src={data.image} 
                alt={data.name} 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                <h3 className="text-xl font-bold text-slate-900">{data.name}</h3>
                <p className="text-blue-600 font-bold text-base uppercase tracking-wider">{data.role}</p>
              </div>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-6">
              <h4 className="text-lg font-bold text-slate-900 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Key Responsibilities
              </h4>
              <ul className="space-y-4 text-base text-slate-600">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                  <span>Strategic Planning & Institutional Growth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                  <span>Academic Quality Assurance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                  <span>Industry-Academia Partnerships</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold text-slate-900">{data.title}</h1>
              <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
            </div>

            <div className="relative p-10 md:p-16 bg-blue-50 rounded-[3rem] border border-blue-100 italic">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-200 -z-0" />
              <p className="text-2xl md:text-3xl text-blue-900 font-medium relative z-10 leading-relaxed">
                "{data.quote}"
              </p>
            </div>

            <div className="space-y-8 text-xl text-slate-600 leading-relaxed">
              {data.content.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 rounded-2xl mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-bold text-slate-900">Academic Excellence</h5>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-indigo-50 rounded-2xl mb-4">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <h5 className="font-bold text-slate-900">Practical Learning</h5>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-amber-50 rounded-2xl mb-4">
                  <User className="w-6 h-6 text-amber-600" />
                </div>
                <h5 className="font-bold text-slate-900">Student Mentorship</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
