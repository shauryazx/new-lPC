import { motion } from 'motion/react';
import { FileText, Download, Users, CheckCircle2 } from 'lucide-react';

export default function Faculty() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-blue-900 pt-32 pb-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">
            OUR FACULTY
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Meet the academic leaders and technical experts driving engineering excellence at Laxmidhar Polytechnic College.
          </p>
        </motion.div>
      </section>

      {/* PDF Viewer Card */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Card Header */}
          <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                List of Faculty Members & Qualifications
              </h2>
            </div>
            <a 
              href="/Faculty-Staff-List.pdf" 
              download="Faculty-Staff-List.pdf"
              className="flex items-center px-6 py-3 bg-blue-900 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              VIEW / DOWNLOAD PDF
            </a>
          </div>

          {/* PDF Content Area */}
          <div className="bg-slate-800 p-2 md:p-4 flex justify-center h-[800px]">
            <iframe 
              src="/Faculty-Staff-List.pdf" 
              className="w-full h-full rounded-lg bg-white shadow-2xl"
              title="Faculty List Preview"
            />
          </div>
        </motion.div>

        {/* Info Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">Verified Academic Record</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">Updated for Session 2026-27</span>
          </div>
        </div>
      </section>
    </div>
  );
}
