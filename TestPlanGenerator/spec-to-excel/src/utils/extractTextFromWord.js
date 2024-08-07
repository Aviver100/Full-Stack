import mammoth from "mammoth";

async function extractTextFromWord(file) {
  const result = await mammoth.extractRawText({ arrayBuffer: file });
  return result.value;
}

export default extractTextFromWord;
