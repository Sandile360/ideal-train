const express = require('express');
const mongoose = require('mongoose');

const Movie = require('./api/movies.js');
const Series = require('./api/series.js');
const Songs = require('./api/songs.js');
const app = express();
app.use(express.json());

// series
app.get('/series', async(req, res) => {

    try{
        const series = await Series.find({});
        res.status(200).json(series);
    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting Series');
    }
}
);

app.get('/series/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const series = await Series.findById(id);
        res.status(200).json(series);

    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting Series');
    }
}
);

app.post('/series', async(req, res) => {

    try{
        const movie = await Series.create(req.body);
        res.status(200).json(movie);
        
    }catch(err){
        console.log(err);
        res.status(404).send('Error creating Series');
    }
}
);

app.put('/series/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const series = await Series.findByIdAndUpdate(id,req.body, {new: true});
        if(!series){
            return res.status(404).send('Series not found');
        }
        const updatedSeries = await Series.findById(id);
        res.status(200).json(updatedSeries);


    }catch(err){
        console.log(err);
        res.status(500).send('Error creating Series');
    }
}
);


app.delete('/series/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const series = await Series.findByIdAndDelete(id,req.body);
        if(!series){
            return res.status(404).send('Series not found');
        }
        res.status(200).json(series);

    }catch(err){
        console.log(err);
        res.status(500).send('Error deleting Series');
    }
}
);


// Movies
app.get('/movies', async(req, res) => {

    try{
        const movies = await Movie.find({});
        res.status(200).json(movies);
    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting movie');
    }
}
);

app.get('/movie/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const movie = await Movie.findById(id);
        res.status(200).json(movie);

    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting movie');
    }
}
);


app.put('/movie/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const movie = await Movie.findByIdAndUpdate(id,req.body, {new: true});
        if(!movie){
            return res.status(404).send('Movie not found');
        }
        const updatedMovie = await Movie.findById(id);
        res.status(200).json(updatedMovie);


    }catch(err){
        console.log(err);
        res.status(500).send('Error creating movie');
    }
}
);

app.delete('/movie/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const movie = await Movie.findByIdAndDelete(id,req.body);
        if(!movie){
            return res.status(404).send('Movie not found');
        }
        res.status(200).json(movie);

    }catch(err){
        console.log(err);
        res.status(500).send('Error deleting movie');
    }
}
);


app.post('/movies', async(req, res) => {

    try{
        const movie = await Movie.create(req.body);
        res.status(200).json(movie);
        
    }catch(err){
        console.log(err);
        res.status(404).send('Error creating movie');
    }
}
);


// songs
app.get('/songs', async(req, res) => {

    try{
        const songs = await Songs.find({});
        res.status(200).json(songs);
    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting Songs');
    }
}
);

app.get('/song/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const song = await Songs.findById(id);
        res.status(200).json(song);

    }catch(err){
        console.log(err);
        res.status(500).send('Error Getting Song');
    }
}
);

app.post('/songs', async(req, res) => {

    try{
        const songs = await Songs.create(req.body);
        res.status(200).json(songs);
        
    }catch(err){
        console.log(err);
        res.status(404).send('Error creating Songs');
    }
}
);

app.put('/song/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const song = await Songs.findByIdAndUpdate(id,req.body, {new: true});
        if(!song){
            return res.status(404).send('Song not found');
        }
        const updatedSong = await Songs.findById(id);
        res.status(200).json(updatedSong);


    }catch(err){
        console.log(err);
        res.status(500).send('Error creating Songs');
    }
}
);


app.delete('/song/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const song = await Songs.findByIdAndDelete(id,req.body);
        if(!song){
            return res.status(404).send('Song not found');
        }
        res.status(200).json(song);

    }catch(err){
        console.log(err);
        res.status(500).send('Error deleting Song');
    }
}
);

mongoose.connect('mongodb+srv://sanndlovu021:VUCEjxjj4QQ61rNP@backenddb.o7slgzc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
.then(()=> {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
        });
}).catch((err) => { 
    console.log(err);
});