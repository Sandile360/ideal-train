const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String },
    releaseDate: { type: Date },
    duration: { type: Number, required: true }, // Duration in minutes
    cast: [
      {
        name: { type: String, required: true },
        role: { type: String }, // Role in the movie
      }
    ], // Array of objects for cast members
    ratings: [
      {
        user: { type: String }, // User who rated
        score: { type: Number, min: 0, max: 10 }
      }
    ], // Array of objects for ratings
    description: { type: String }
});
  
module.exports = mongoose.model('Movie', movieSchema);
  