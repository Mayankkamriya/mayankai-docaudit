import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Set up EJS as view engine
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

import checkRouter from './routes/check.route.js';
app.use(express.json());

app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.render('home');
});
app.get("/results", (req, res) => {
    res.render("results");   // results.ejs in views folder
});

// Static pages
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/about', (req, res) => {
    res.render('about');
});


app.use('/api/check', checkRouter);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});


