import mongoose from 'mongoose';

interface IEvent {
  title: string;
  start: Date;
  end: Date;
  userId: mongoose.Schema.Types.ObjectId;
}

const EventSchema = new mongoose.Schema<IEvent>({
  title: String,
  start: Date,
  end: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model<IEvent>('Event', EventSchema);
