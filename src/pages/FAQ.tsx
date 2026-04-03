import { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What is the eligibility for 1st-year admission?",
    answer: "To be eligible for 1st-year admission, a candidate must have passed the 10th standard (Secondary) from a recognized board with a minimum of 35% marks."
  },
  {
    question: "How can I apply for lateral entry (direct 2nd year)?",
    answer: "Students who have passed 12th PCM or a 2-year ITI program in a relevant trade are eligible for direct admission into the 2nd year (3rd semester) of the diploma program."
  },
  {
    question: "Is there any scholarship for SC/ST students?",
    answer: "Yes, we offer 100% tuition fee waivers for eligible students from SC, ST, and SBC categories as per government norms. We also offer merit-based scholarships for high-performing students."
  },
  {
    question: "What is the 12th PCM equivalence benefit?",
    answer: "Laxmidhar Polytechnic College students can obtain an additional 12th PCM marksheet from RBSE by passing just one English paper alongside their diploma. This provides dual qualification benefits."
  },
  {
    question: "Are there placement opportunities after the diploma?",
    answer: "Absolutely. We have a dedicated placement cell that works with top recruiters like Tata, L&T, Maruti Suzuki, and Honda. We maintain a 100% placement record for eligible students."
  },
  {
    question: "Where is the college located?",
    answer: "The college is strategically located in the MIA RIICO industrial hub of Alwar, Rajasthan, near Tarni Cancer Hospital. This location provides students with excellent industrial exposure."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Find answers to common queries about admissions, academics, scholarships, and placements at Laxmidhar Polytechnic College.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${
                activeIndex === idx 
                  ? 'bg-white border-blue-100 shadow-2xl shadow-blue-500/10' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-100'
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center space-x-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    activeIndex === idx ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 group-hover:bg-blue-50'
                  }`}>
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${
                    activeIndex === idx ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`p-2 rounded-xl transition-all ${
                  activeIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-white text-slate-400 group-hover:text-blue-600'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pl-18 text-xl text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8">Still have questions?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Our admission counselors are available to help you with any specific queries you might have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:8824351992" 
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
              >
                Call Support
              </a>
              <a 
                href="mailto:laxmindharpoly@gmail.com" 
                className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-400 transition-all border border-blue-400/50"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
