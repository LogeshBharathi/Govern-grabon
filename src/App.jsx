import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadState from './components/UploadState';
import ProcessingState from './components/ProcessingState';
import ResultModal from './components/ResultModal';

// Mock data that the "AI" will produce
const MOCK_JOB_DATA = {
    title: "Recruitment of Technician Grade-I Signal & Technician Grade-III",
    organization: "Railway Recruitment Board (RRB)",
    vacancies: "6238",
    salaryRange: "Level 2 to 5",
    applyBy: "28-07-2025",
    eligibility: "Age Limit: 18 - 33 years for Technician Grade-I Signal, 18 - 30 years for Technician Grade III posts. Candidates should possess all the prescribed educational and technical qualifications for the post before the closing date of application.",
    salaryDetails: "Technician Grade-I Signal: Level-5, Initial pay: Rs. 29,200. Technician Grade III: Level-2, Initial pay: Rs. 19,900.",
    howToApply: "Candidates must apply online through the official websites of the RRBs. Details will be available on the respective RRB websites.",
};


function App() {
  const [appState, setAppState] = useState('upload'); // 'upload', 'processing', 'result'
  const [jobData, setJobData] = useState(null);
  
  // This effect simulates the backend processing
  useEffect(() => {
    if (appState === 'processing') {
      const timer = setTimeout(() => {
        // After 3.5s total (1.5s parsing + 2s summarizing), show results
        setJobData(MOCK_JOB_DATA);
        setAppState('result');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleFileSelect = (file) => {
    if (file) {
      setAppState('processing');
    }
  };

  const handleReset = () => {
    setAppState('upload');
    setJobData(null);
  };
  
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-12 md:py-20 flex-grow">
        {appState === 'upload' && <UploadState onFileSelect={handleFileSelect} />}
        {appState === 'processing' && <ProcessingState />}
      </main>
      
      {appState === 'result' && <ResultModal jobData={jobData} onClose={handleReset} />}

      <Footer />
    </div>
  );
}

export default App;