import express from 'express';
import jwt from 'jsonwebtoken';
import Event from '../models/Event';

const router = express.Router();

// 認証ミドルウェア
const authenticate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
        req.body.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// 予定の取得
router.get('/', authenticate, async (req, res) => {
    const events = await Event.find({ userId: req.body.userId });
    res.json(events);
});

// 予定の作成
router.post('/', authenticate, async (req, res) => {
    const { title, start, end, userId } = req.body;
    const event = new Event({ title, start, end, userId });
    await event.save();
    res.json(event);
});

// 予定の削除
router.delete('/:id', authenticate, async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
});

export default router;
