import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/guestbook';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Comment Schema
const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    avatar: String,
    created_at: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema, 'Comment');

// API Routes
app.get('/api/comments', async (req, res) => {
    try {
        const comments = await Comment.find().sort({ created_at: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/comments', async (req, res) => {
    const { name, comment } = req.body;

    if (!name || !comment) {
        return res.status(400).json({ error: 'Name and comment are required' });
    }

    const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;

    try {
        const newComment = new Comment({ name, comment, avatar });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Letterboxd Proxy Route
app.get('/api/letterboxd/:username', async (req, res) => {
    const { username } = req.params;
    const rssUrl = `https://letterboxd.com/${username}/rss/`;

    try {
        const response = await fetch(rssUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                'Accept': 'application/xml, text/xml, */*'
            }
        });

        if (!response.ok) {
            throw new Error(`Letterboxd returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.text();
        res.set('Content-Type', 'text/xml');
        res.send(data);
    } catch (error) {
        console.error('Error fetching Letterboxd feed:', error);
        res.status(500).json({ error: 'Failed to fetch Letterboxd feed', details: error.message });
    }
});


if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;
