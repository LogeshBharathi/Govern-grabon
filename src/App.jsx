import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploadState from "./components/UploadState";
import ProcessingState from "./components/ProcessingState";
import ResultModal from "./components/ResultModal";

// Construct the API endpoint using Vite's environment variable syntax
// The base URL comes from the .env file (prefixed with VITE_), and the path is appended here.
const API_ENDPOINT = `${import.meta.env.VITE_API_BASE_URL}/api/v1/parse-pdf`;

function App() {
  const [appState, setAppState] = useState("upload"); // 'upload', 'processing', 'result'
  const [jobData, setJobData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = async (file) => {
    if (!file) return;

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setError("File size too large. Please upload a PDF smaller than 10MB.");
      return;
    }

    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    setAppState("processing");
    setError(null); // Clear previous errors

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Uploading file to:", API_ENDPOINT);
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      // Check if the response contains valid data
      if (!result || Object.keys(result).length === 0) {
        throw new Error("No data received from the server. Please try again.");
      }

      // Map the API response to the format expected by the ResultModal component
      const formattedData = {
        title:
          result.job_title ||
          result.title ||
          result.data?.job_title ||
          "Job Title Not Found",
        organization:
          result.department ||
          result.organization ||
          result.data?.department ||
          "Organization Not Found",
        vacancies:
          result.vacancies ||
          result.number_of_posts ||
          result.data?.vacancies ||
          "Not specified",
        salaryRange:
          result.salary ||
          result.salary_range ||
          result.pay_scale ||
          result.data?.salary ||
          "Not specified",
        applyBy:
          result.application_deadline ||
          result.apply_by ||
          result.last_date ||
          result.data?.application_deadline ||
          "Not specified",
        eligibility:
          result.eligibility ||
          result.qualification ||
          result.data?.eligibility ||
          "Not specified",
        howToApply:
          result.how_to_apply ||
          result.application_process ||
          result.data?.how_to_apply ||
          "Check the official notification for application details.",
        applicationUrl: result.application_url || result.data?.application_url,
        originalFile: file,
      };

      console.log("Formatted data:", formattedData);
      setJobData(formattedData);
      setAppState("result");
    } catch (err) {
      console.error("Error uploading file:", err);
      setError(err.message || "Failed to process the PDF. Please try again.");
      setAppState("upload"); // Return to the upload screen on error
    }
  };

  const handleReset = () => {
    setAppState("upload");
    setJobData(null);
    setError(null);
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 py-12 md:py-20 flex-grow">
        {appState === "upload" && (
          <UploadState onFileSelect={handleFileSelect} error={error} />
        )}
        {appState === "processing" && <ProcessingState />}
      </main>

      {error && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Error</h3>
            <p className="text-gray-700 mb-4">{error}</p>
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {appState === "result" && (
        <ResultModal jobData={jobData} onClose={handleReset} />
      )}

      <Footer />
    </div>
  );
}

export default App;
