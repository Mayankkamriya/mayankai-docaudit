import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export async function extractTextFromPDF(buffer) {
  try {
    const data = await pdf(buffer);
    console.log(data.text);
    return data.text;  
    
      
  } catch (error) {
    throw new Error("Failed to extract PDF text: " + error.message);
  }
}
