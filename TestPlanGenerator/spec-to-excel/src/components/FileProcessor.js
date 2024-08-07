import React, { useState } from "react";
import { saveAs } from "file-saver";
import extractTextFromPDF from "../utils/extractTextFromPDF";
import extractTextFromWord from "../utils/extractTextFromWord";
import extractScripts from "../utils/extractScripts";
import createExcel from "../utils/createExcel";

function FileProcessor() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProcessFile = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    let text = "";
    if (file.type === "application/pdf") {
      text = await extractTextFromPDF(await file.arrayBuffer());
    } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      text = await extractTextFromWord(await file.arrayBuffer());
    } else {
      alert("Unsupported file type.");
      return;
    }

    const scripts = extractScripts(text);
    const excelBlob = createExcel(scripts);
    saveAs(excelBlob, "scripts.xlsx");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleProcessFile}>Process File</button>
    </div>
  );
}

export default FileProcessor;
