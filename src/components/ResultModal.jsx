import React from 'react';
import { X, Users, Wallet, CalendarClock, ClipboardCheck, CreditCard, Send } from 'lucide-react';

const ResultModal = ({ jobData, onClose }) => {
  if (!jobData) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 scale-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">{jobData.title}</h1>
            <p className="mt-2 text-md text-gray-600 font-medium">{jobData.organization}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-gray-200 py-6">
            <div className="flex items-start space-x-3"><div className="flex-shrink-0"><Users className="w-6 h-6 text-orange-500" /></div><div><p className="text-sm text-gray-500">Vacancies</p><p className="text-lg font-semibold text-blue-900">{jobData.vacancies}</p></div></div>
            <div className="flex items-start space-x-3"><div className="flex-shrink-0"><Wallet className="w-6 h-6 text-orange-500" /></div><div><p className="text-sm text-gray-500">Salary</p><p className="text-md font-semibold text-blue-900">{jobData.salaryRange}</p></div></div>
            <div className="flex items-start space-x-3"><div className="flex-shrink-0"><CalendarClock className="w-6 h-6 text-red-500" /></div><div><p className="text-sm text-gray-500">Apply Before</p><p className="text-lg font-semibold text-blue-900">{jobData.applyBy}</p></div></div>
          </div>
          <div className="py-6 space-y-6">
            <div><h3 className="font-semibold text-blue-900 mb-2 flex items-center"><ClipboardCheck className="w-5 h-5 mr-2 text-gray-500" />Eligibility Criteria</h3><p className="text-gray-700 text-sm leading-relaxed">{jobData.eligibility}</p></div>
            <div><h3 className="font-semibold text-blue-900 mb-2 flex items-center"><CreditCard className="w-5 h-5 mr-2 text-gray-500" />Salary Details</h3><p className="text-gray-700 text-sm leading-relaxed">{jobData.salaryDetails}</p></div>
            <div><h3 className="font-semibold text-blue-900 mb-2 flex items-center"><Send className="w-5 h-5 mr-2 text-gray-500" />How to Apply</h3><p className="text-gray-700 text-sm leading-relaxed">{jobData.howToApply}</p></div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="#" className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-center">Apply Now</a>
            <a href="#" className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all text-center">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;