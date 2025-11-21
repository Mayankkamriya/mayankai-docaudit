import express from 'express';
import multer from 'multer';
import { checkDocumentRules } from "../services/llmService.js";
import { extractTextFromPDF } from "../services/pdfService.js";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files allowed'));
        }
    }
});

router.post('/analyze', upload.single('pdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No PDF file uploaded' });
        }
        const pdfBuffer = req.file.buffer;
        const { rule1, rule2, rule3 } = req.body;

        const rules = [rule1, rule2, rule3]
            .filter(Boolean)
            .map(rule => rule.trim())
            .filter(rule => rule.length > 0);

        if (rules.length !== 3) {
            return res.status(400).json({ error: 'Provide exactly 3 rules' });
        }

        // Extract text from PDF
        const pdfText = await extractTextFromPDF(pdfBuffer);

        // Check with LLM
        const results = await checkDocumentRules(pdfText, rules);
        console.log("LLM Results:", results);

        if (!Array.isArray(results) || results.length === 0) {
            throw new Error('Invalid results from LLM service');
        }
        // Calculate overall status
        const overallStatus = results.every(r => r.status === 'pass')
            ? 'Compliant'
            : 'Non-Compliant';
        
        const response = {
            success: true,
            fileName: req.file.originalname,
            fileSize: `${(req.file.size / 1024).toFixed(2)} KB`,
            textLength: pdfText.length,
            results,
            overallStatus
        };
        console.log('Sending response with', results.length, 'results');
        res.status(200).json(response);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Failed to process document',
            details: error.message
        });
    }
});

export default router;