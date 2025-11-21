import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


