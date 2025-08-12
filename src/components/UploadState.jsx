import React, { useRef, useState } from 'react';
import { UploadCloud, AlertCircle } from 'lucide-react';

const UploadState = ({ onFileSelect, error }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
        setFileName(file.name);
        onFileSelect(file);
    } else {
        alert('Please drop a PDF file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="max-w-3xl mx-auto text-center fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Unlock Job Details Instantly</h2>
      <p className="mt-4 text-lg text-gray-600">Upload a government job notification PDF and let our AI create a clean, easy-to-read summary for you.</p>

      <div className="mt-10">
        {/* Display Error Message if it exists */}
        {error && (
            <div className="mb-4 flex items-center justify-center gap-2 p-3 bg-red-100 text-red-700 font-medium rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
            </div>
        )}

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative border-2 border-dashed rounded-xl p-8 md:p-12 cursor-pointer bg-white transition-all ${isDragging ? 'border-orange-400 bg-orange-50' : 'border-gray-300 hover:border-orange-400 hover:bg-orange-50'}`}
        >
          <div className="flex flex-col items-center">
            <UploadCloud className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700">Drag & drop your PDF here</p>
            <p className="text-sm text-gray-500 mt-1">or</p>
            <button
              onClick={() => fileInputRef.current.click()}
              className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all"
            >
              Browse File
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadState;