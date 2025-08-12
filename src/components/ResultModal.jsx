import React from "react";
import {
  X,
  Users,
  Wallet,
  CalendarClock,
  ClipboardCheck,
  CreditCard,
  Send,
  ExternalLink,
  Download,
} from "lucide-react";

const ResultModal = ({ jobData, onClose }) => {
  if (!jobData) return null;

  const handleDownload = () => {
    // Create a URL for the blob and trigger download
    const url = URL.createObjectURL(jobData.originalFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = jobData.originalFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-4 md:p-6 overflow-y-auto max-h-[90vh]">
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
              {jobData.title}
            </h1>
            <p className="mt-1 text-sm text-gray-600 font-medium">
              {jobData.organization}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-gray-200 py-4">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Vacancies</p>
                <p className="text-sm font-semibold text-blue-900">
                  {jobData.vacancies}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <Wallet className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Salary</p>
                <p className="text-sm font-semibold text-blue-900">
                  {jobData.salaryRange}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <CalendarClock className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Apply Before</p>
                <p className="text-sm font-semibold text-blue-900">
                  {jobData.applyBy}
                </p>
              </div>
            </div>
          </div>

          <div className="py-4 space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-1 flex items-center text-sm">
                <ClipboardCheck className="w-4 h-4 mr-2 text-gray-500" />
                Eligibility Criteria
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {jobData.eligibility}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1 flex items-center text-sm">
                <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
                Salary Details
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {jobData.salaryDetails}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1 flex items-center text-sm">
                <Send className="w-4 h-4 mr-2 text-gray-500" />
                How to Apply
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {jobData.howToApply}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={jobData.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-center flex items-center justify-center gap-2 text-sm"
            >
              Apply Now <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-4 py-2 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all text-center flex items-center justify-center gap-2 text-sm"
            >
              Download PDF <Download className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
