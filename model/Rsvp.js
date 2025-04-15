import mongoose from 'mongoose';

const RsvpSchema = new mongoose.Schema({
  attending: String,
  name: String,
  email: String,
  guests: [String],
}, { timestamps: true });

export default mongoose.models.Rsvp || mongoose.model('Rsvp', RsvpSchema);
