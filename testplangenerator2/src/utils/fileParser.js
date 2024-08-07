import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist/build/pdf';

export async function parseFile(file) {
  if (file.name.endsWith('.docx')) {
    return parseDocx(file);
  } else if (file.name.endsWith('.pdf')) {
    return parsePdf(file);
  } else {
    throw new Error('Unsupported file type');
  }
}

async function parseDocx(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

async function parsePdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  let content = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const text = await page.getTextContent();
    content += text.items.map(item => item.str).join(' ') + '\n';
  }

  return content;
}