# MayankAI – AI-Powered PDF Document Validator

Upload any PDF, define 3 custom validation rules, and get instant AI verification with evidence and confidence scores. Built with Node.js, Express, and Google Gemini 2.0 Flash.

---

## ✨ Key Features

- **PDF Upload** - Documents up to 5MB
- **Custom Rules** – Define 3 validation criteria in plain English
- **AI Analysis** – Powered by Gemini 2.0 Flash
- **Pass/Fail Results** – Clear status for each rule
- **Evidence & Reasoning** – AI extracts proof and explains decisions
- **Confidence Scores** – 0-100% reliability rating
- **Modern UI** – Beautiful gradient design with smooth interactions

---

## 🖼️ Screenshots

### Home Page
<img width="1897" height="926" alt="Image" src="https://github.com/user-attachments/assets/15243a40-dcca-4d73-b503-267b37d49603" />

### Results Page - AI Analysis
<!-- 📌 ADD YOUR IMAGES HERE 📌 -->
<!-- Replace with your actual image files: -->

<img width="1901" height="915" alt="Image" src="https://github.com/user-attachments/assets/a6b57eee-57ea-4b1c-a756-2f3f82340f4a" />

<img width="1895" height="919" alt="Image" src="https://github.com/user-attachments/assets/86fdfd05-b2de-4a0a-81e6-cb4abbe928ae" />

---

## 💻 Tech Stack

- **Backend:** Node.js + Express.js
- **Templating:** EJS
- **File Upload:** Multer
- **PDF Parsing:** pdf-parse
- **AI Model:** Google Gemini 2.0 Flash
- **UI:** Modern CSS with gradients and animations

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Mayankkamriya/mayankai-docaudit.git
cd mayankai-docaudit/server
npm install
```

### 2. Configure Environment
Create a `.env` file:
```dotenv
PORT=5000
GEMINI_API_KEY=your_api_key_here
```

### 3. Run Application
```bash
npm run dev
```
Access at **http://localhost:5000**

---

## 📋 API Endpoint

```bash
POST /api/check/analyze

Body:
- pdf: PDF file (max 5MB)
- rule1: First validation rule
- rule2: Second validation rule
- rule3: Third validation rule
```

**Response:**
```json
{
  "success": true,
  "fileName": "document.pdf",
  "results": [
    {
      "rule": "Document must mention a date",
      "status": "pass",
      "evidence": "Begin Date: 2st July 2025",
      "reasoning": "The document contains a start date",
      "confidence": 100
    }
  ],
  "overallStatus": "Compliant"
}
```

---

## 🎯 How It Works

1. Upload PDF document (max 5MB)
2. Enter 3 custom validation rules
3. AI extracts text and analyzes each rule
4. Get results with pass/fail status, evidence, and confidence scores

---

## 🌐 Deploy on Replit

1. Import repository to Replit
2. Add `GEMINI_API_KEY` in Secrets tab
3. Run `npm install` in server directory
4. Click Run button
5. Deploy using Replit's deployment feature

---

## 📝 Example Rules

- Document must mention a date
- Document must have a purpose section
- Document must define at least one term
- Document must include contact information
- Document must list requirements

---

## 🔒 Security

- Files processed in memory only (not stored)
- HTTPS for all API calls
- Environment variables for sensitive data
- No user tracking or data collection

---

## 👤 Author

**Mayank Kamriya**  
[LinkedIn](https://www.linkedin.com/in/mayank-kamriya/) | [GitHub](https://github.com/Mayankkamriya)

---

## 📄 License

ISC

---

## ⭐ Support

Like this project? Star the repo and share it!
