import express from 'express';
import { google } from 'googleapis';

const router = express.Router();
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Google認証URL取得
router.get('/auth-url', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar.events'],
    });
    res.json({ url });
});

// Googleカレンダーへ予定を追加
router.post('/add-event', async (req, res) => {
    const { token, event } = req.body;
    oauth2Client.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    const response = await calendar.events.insert({
        calendarId: 'primary',
        resource: event,
    });

    res.json(response.data);
});

export default router;
