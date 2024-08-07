import React from 'react';

function FileUploader({ onFileUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".docx,.pdf"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUploader;