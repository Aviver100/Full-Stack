// import { PDFDocument } from "pdf-lib";

// async function extractTextFromPDF(file) {
//   const pdfDoc = await PDFDocument.load(file);
//   const numPages = pdfDoc.getPageCount();
//   let text = "";

//   for (let i = 0; i < numPages; i++) {
//     const page = pdfDoc.getPage(i);
//     const { text: pageText } = await page.getTextContent();
//     text += pageText.items.map(item => item.str).join(" ");
//   }

//   return text;
// }

// export default extractTextFromPDF;

import { getDocument } from 'pdfjs-dist';

async function extractTextFromPDF(file) {
  const typedArray = new Uint8Array(await file.arrayBuffer());
  const pdf = await getDocument({ data: typedArray }).promise;
  let text = '';

  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    text += pageText + '\n';
  }

  return text;
}

export default extractTextFromPDF;
