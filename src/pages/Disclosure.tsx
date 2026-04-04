import { Landmark, FileText, ShieldCheck, Download, Users, Building2, GraduationCap, Gavel, FileSpreadsheet, FileImage } from "lucide-react";

export default function DisclosurePage() {
  const disclosureSections = [
    {
      title: "AICTE Mandate",
      icon: Gavel,
      documents: [
        { name: "AICTE-MANDATE", filename: "AICTE-MANDATE.xlsx", isSpreadsheet: true }
      ]
    },
    {
      title: "Regulatory Approval",
      icon: ShieldCheck,
      documents: [
        { name: "Extension of Approval (EOA) Report 2025-26", filename: "EOA_Report_New.pdf" },
      ]
    },
    {
      title: "Statutory Committees",
      icon: Users,
      documents: [
        { name: "Grievance Redressal Committee Details", filename: "grievance-redressal.pdf" },
        { name: "Anti-Ragging Committee & Commitment", filename: "Anti-ragging-committed.pdf" },
        { name: "Internal Complaint Committee (ICC)", filename: "internal-committee.pdf" },
        { name: "Committee for SC & ST Students", filename: "sc-st_committee.pdf" },
      ]
    },
    {
      title: "Infrastructure & Academics",
      icon: Building2,
      documents: [
        { name: "Details of All Rooms, Faculty & Area", filename: "all-room-faculty-arae-detail.pdf" },
        { name: "Carpet Area Details", filename: "carpet-area-details.pdf" },
        { name: "Approved Ground Floor Plan Blueprint", filename: "Ground-Floor-Plan.png", isImage: true },
        { name: "Approved First Floor Plan Blueprint", filename: "First-Floor-Plan.png", isImage: true },
        { name: "Result Analysis & Enrollment of Students", filename: "result-analysis-and-enrollment-students.pdf" },
      ]
    },
    {
      title: "Placement & Training",
      icon: GraduationCap,
      documents: [
        { name: "Placement & Training Officer Details", filename: "placement-training-officer.pdf" },
      ]
    },
    {
      title: "Faculty & Staff",
      icon: Users,
      documents: [
        { name: "List of Faculty Members & Qualifications", filename: "Faculty-Staff-List.pdf" },
      ]
    }
  ];

  return (
    <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 mb-12 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase italic italic">Mandatory Disclosure</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Official records and regulatory documentation maintained in accordance with AICTE & BTER Jodhpur norms.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        {/* General Info Card */}
        <div className="bg-white border-none shadow-lg overflow-hidden rounded-2xl">
          <div className="bg-white border-b py-4 px-6">
            <h2 className="text-lg font-bold flex items-center gap-2 text-blue-900">
              <Landmark className="h-5 w-5 text-blue-500" /> Institutional Profile Summary
            </h2>
          </div>
          <div className="p-0">
            <table className="w-full text-base">
              <tbody>
                <tr className="border-b last:border-0">
                  <td className="font-bold w-1/3 bg-slate-50/50 p-4">Institute Name</td>
                  <td className="p-4">Laxmidhar Polytechnic College</td>
                </tr>
                <tr className="border-b last:border-0">
                  <td className="font-bold bg-slate-50/50 p-4">Location</td>
                  <td className="p-4">IN-3, M.I.A., RIICO, Alwar (Raj.)</td>
                </tr>
                <tr className="border-b last:border-0">
                  <td className="font-bold bg-slate-50/50 p-4">AICTE ID</td>
                  <td className="p-4">1-3148111 (Reference AICTE Portal)</td>
                </tr>
                <tr className="border-b last:border-0">
                  <td className="font-bold bg-slate-50/50 p-4">Affiliation</td>
                  <td className="p-4">BTER Jodhpur, Rajasthan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclosure Sections */}
        {disclosureSections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-3 border-l-4 border-blue-500 pl-4">
              <section.icon className="h-6 w-6 text-blue-900" />
              <h2 className="text-xl font-black text-blue-900 uppercase tracking-tight">{section.title}</h2>
            </div>
            
            <div className="bg-white border-none shadow-md overflow-hidden rounded-xl">
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-base">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="w-16 text-center font-bold p-4">Sr. No.</th>
                      <th className="font-bold text-left p-4">Document Description</th>
                      <th className="text-right font-bold p-4 px-6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.documents.map((doc: any, dIdx) => (
                      <tr key={dIdx} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="text-center font-medium text-slate-500 align-top pt-6 p-4">{dIdx + 1}</td>
                        <td className="font-bold text-slate-800 py-6 p-4">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                              {doc.isSpreadsheet ? (
                                <FileSpreadsheet className="h-4 w-4 text-green-600" />
                              ) : doc.isImage ? (
                                <FileImage className="h-4 w-4 text-blue-500" />
                              ) : (
                                <FileText className="h-4 w-4 text-blue-900" />
                              )}
                              {doc.name}
                            </div>
                            {doc.isImage && (
                              <div className="mt-4 border-2 border-slate-100 rounded-xl overflow-hidden shadow-sm max-w-full">
                                <img 
                                  src={`/${doc.filename}`} 
                                  alt={doc.name} 
                                  className="w-full h-auto object-contain bg-white"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="text-right px-6 align-top pt-6 p-4">
                          <div className="flex flex-col gap-2 items-end">
                            {!doc.isImage && (
                              <>
                                {!doc.isSpreadsheet && (
                                  <a 
                                    href={`/${doc.filename}`} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-black bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg hover:bg-blue-900 hover:text-white transition-all uppercase tracking-tighter w-fit"
                                  >
                                    <FileText className="h-3 w-3" /> 
                                    View PDF
                                  </a>
                                )}
                                <a 
                                  href={`/${doc.filename}`} 
                                  download={doc.filename}
                                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-900 transition-colors uppercase tracking-widest w-fit"
                                >
                                  <Download className="h-3 w-3" /> Download
                                </a>
                              </>
                            )}
                            {doc.isImage && (
                              <a 
                                href={`/${doc.filename}`} 
                                download={doc.filename}
                                className="inline-flex items-center gap-2 text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-blue-900 hover:text-white transition-all uppercase tracking-widest w-fit"
                              >
                                <Download className="h-3 w-3" /> Download Original
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Disclaimer Footer */}
        <div className="text-center pt-8 text-slate-400 text-xs space-y-2 uppercase tracking-[0.2em] opacity-60">
          <p className="flex items-center justify-center gap-2">
            <FileText className="h-3 w-3" /> All documents are maintained in accordance with AICTE Process Handbook 2025-26.
          </p>
          <p>Last Updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
