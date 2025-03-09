import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import eventRoutes from './routes/events';
import googleCalendarRoutes from './routes/googleCalendar';


app.use('/google-calendar', googleCalendarRoutes);

app.use('/events', eventRoutes);

app.use('/auth', authRoutes);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB接続
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Calendar API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
