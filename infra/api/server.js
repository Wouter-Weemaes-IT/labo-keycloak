
import {getStories,deleteStories,Update,getPoints} from './json_service.js'
import express from "express";


// enable CORS using npm package
import cors from "cors";

const app = express();
app.use(cors());


app.get('/storypoints', (req, res) => {
    res
        .status(200)
        .send(getPoints())
        .end();
});
app.get('/storyboard', (req, res) => {
    res
        .status(200)
        .send(getStories())
        .end();
});
app.get('/storypoints/', (req, res) => {
    res
        .status(200)
        .send(getPoints(req.query))
        .end();
});
app.get('/storyboard/', (req, res) => {
    res
        .status(200)
        .send(getPoints(req.query()))
        .end();
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});