import * as XLSX from "xlsx";

function createExcel(scripts) {
  const ws = XLSX.utils.aoa_to_sheet([["Script"]].concat(scripts.map(script => [script])));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Scripts");
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([excelBuffer], { type: "application/octet-stream" });
}

export default createExcel;
