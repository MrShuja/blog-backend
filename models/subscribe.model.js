import mongoose from 'mongoose';

const subscribeSchema = new mongoose.Schema({
  email: String,
});

const Subscribe = mongoose.model('Subscriber', subscribeSchema);

export default Subscribe;
