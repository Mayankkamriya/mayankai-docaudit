import "dotenv/config";

export async function checkDocumentRules(pdfText, rules) {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) throw new Error("Gemini API key missing");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  // Join all rules into a single prompt
  const rulesList = rules.map((r, i) => `${i + 1}. ${r}`).join("\n");

  const prompt = `
You are a strict document checker.

Given the PDF TEXT and a list of RULES:
- Check each rule against the PDF text
- For each rule, return pass or fail
- Include one evidence line from text
- Give short reasoning
- Give confidence score 0-100

PDF TEXT:
${pdfText}

RULES:
${rulesList}

Return EXACT JSON ONLY as an array of objects:
[
  {
    "rule": "Rule 1 text",
    "status": "",
    "evidence": "",
    "reasoning": "",
    "confidence": 0
  }
]
`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  let jsonResult;
  try {
    jsonResult = JSON.parse(aiText);
  } catch {
    jsonResult = JSON.parse(aiText.replace(/```json|```/g, "").trim());
  }

  return jsonResult;
}
