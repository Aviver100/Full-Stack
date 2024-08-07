import * as XLSX from 'xlsx';

export function generateExcel(scenarios) {
  const worksheet = XLSX.utils.json_to_sheet(scenarios);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Test Scenarios");
  
  XLSX.writeFile(workbook, "tfs_test_scenarios.xlsx");
}