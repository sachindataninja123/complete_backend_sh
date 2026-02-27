// server banane ka kaam

const express = require("express")

const app = express();

// Middleware to read JSON
app.use(express.json());

const notes = [];

// post '/notes' api
app.post('/notes' , (req , res) => {
    notes.push(req.body)

    res.status(201).json({
        message : "Notes created successfully"
    })
})

// get '/seeNotes' api
app.get('/seeNotes' , (req ,res) => {

    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

// delete '/notes' api
app.delete("/notes/:index" , (req, res) => {
    const index = req.params.index;
    delete notes[index]

    res.status(200).json({
        message : "notes deleted Successfully"
    })
})

module.exports = app 