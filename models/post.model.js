const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  actualizationDate: { type: Date },
  description: { type: String, required: true },
  image: { type: String },
  price: { type: Number },
  location: { type: String },
  user: {type: String},
});

module.exports = mongoose.model('Post', postSchema);
