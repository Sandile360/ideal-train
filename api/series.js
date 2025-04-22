const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    creator: { type: String },
    seasons: [
      {
        seasonNumber: { type: Number, required: true },
        episodes: [
          {
            episodeNumber: { type: Number, required: true },
            title: { type: String, required: true },
            duration: { type: Number }, // Duration in minutes
            airDate: { type: Date }
          }
        ] // Array of episode objects
      }
    ], // Array of season objects with nested episode arrays
    ongoing: { type: Boolean }, // True if the series is ongoing
    ratings: [
      {
        user: { type: String }, // User who rated
        score: { type: Number, min: 0, max: 10 }
      }
    ], // Array of objects for ratings
    description: { type: String }
  });
  
  module.exports = mongoose.model('Series', seriesSchema);
  