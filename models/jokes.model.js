// import mongoose to build the model 
const mongoose = require('mongoose');

// the model - the rules the entries need to follow
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
}, {timestamps: true})

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke