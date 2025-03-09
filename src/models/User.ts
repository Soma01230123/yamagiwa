import mongoose from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model<IUser>('User', UserSchema);
