import React from 'react';
import { FileText, Layers, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1: PDF Summarizing */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-blue-900">Advanced PDF Parsing</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Our AI is trained to understand complex government PDF layouts, ensuring accurate extraction of key job details every time.</p>
          </div>
          {/* Card 2: Coming Soon */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <Layers className="w-6 h-6 text-gray-400" />
              <h3 className="text-lg font-semibold text-blue-900">More File Types</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed"><span className="font-bold text-gray-500">Coming Soon:</span> We're expanding our AI to handle DOCX files, image-based notifications, and direct web links.</p>
          </div>
          {/* Card 3: Seamless Experience */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-blue-900">Seamless Experience</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">From upload to summary in seconds. Our streamlined process is designed to save you time and effort in your job search.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 AI Sarkari Job Parser. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;