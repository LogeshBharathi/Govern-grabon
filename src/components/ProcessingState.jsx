import React, { useState, useEffect } from 'react';

const ProcessingState = () => {
    const [showSummarizing, setShowSummarizing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSummarizing(true);
        }, 1500); // Wait 1.5s before showing the second step

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);


    return (
        <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-gray-800">Analyzing your document...</h2>
            <p className="mt-2 text-lg text-gray-600">This should only take a moment.</p>
            <div className="mt-12 space-y-8">
                <div className="flex items-center justify-center space-x-4">
                    <div className="spinner w-8 h-8 border-4 border-gray-200 rounded-full"></div>
                    <p className="text-xl text-gray-700">Parsing PDF structure</p>
                </div>
                <div className={`flex items-center justify-center space-x-4 transition-opacity duration-500 ${showSummarizing ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="spinner w-8 h-8 border-4 border-gray-200 rounded-full"></div>
                    <p className="text-xl text-gray-700">Summarizing with AI</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessingState;