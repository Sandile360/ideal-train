const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: {
      name: { type: String },
      releaseYear: { type: Number }
    }, // Album is a nested object
    genre: { type: String },
    releaseDate: { type: Date },
    duration: { type: Number }, // Duration in seconds
    lyrics: [
      {
        verse: { type: Number }, // Verse number
        content: { type: String } // Verse lyrics
      }
    ], // Array of objects for lyrics
    ratings: [
      {
        user: { type: String }, // User who rated
        score: { type: Number, min: 0, max: 10 }
      }
    ] // Array of objects for ratings
  });
  
  module.exports = mongoose.model('Song', songSchema);
  