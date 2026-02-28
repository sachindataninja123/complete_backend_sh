const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

// POST /notes = Create a note
// GET /notes = Get all notes
// DELETE /notes/:id = Delete a notes
// PATCH /notes/:id = Update a note

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note Created Successfully",
  });
});

app.get("/seeNotes" , async (req, res) => {
   const notes =  await noteModel.find(); // []

   res.status(200).json({
    message : "Notes fetched Successfully",
    notes : notes
   })
})

app.delete("/notes/:id" , async(req , res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message:"Note deleted Successfully"
    })
})

module.exports = app;
