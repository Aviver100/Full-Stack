import React from 'react';

function DownloadButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Download Test Scenarios (XLSX)
    </button>
  );
}

export default DownloadButton;