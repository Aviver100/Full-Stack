import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ProcessingStatus from './components/ProcessingStatus';
import DownloadButton from './components/DownloadButton';
import { parseFile } from './utils/fileParser';
import { generateScenarios } from './utils/scenarioGenerator';
import { generateExcel } from './utils/excelGenerator';

function App() {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [scenarios, setScenarios] = useState(null);

  const handleFileUpload = async (uploadedFile) => {
    setFile(uploadedFile);
    setProcessing(true);

    try {
      const content = await parseFile(uploadedFile);
      const generatedScenarios = await generateScenarios(content);
      setScenarios(generatedScenarios);
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (scenarios) {
      generateExcel(scenarios);
    }
  };

  return (
    <div className="App">
      <h1>TFS Test Scenario Generator</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      {processing && <ProcessingStatus />}
      {scenarios && <DownloadButton onClick={handleDownload} />}
    </div>
  );
}

export default App;