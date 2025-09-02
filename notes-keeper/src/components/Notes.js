import React, { useState } from "react";

export default function Notes({ mode , showAlert }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  
  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      showAlert("✅ Note added successfully!","success");
      setNewNote("");
    } else {
      showAlert("⚠️ Please write something before adding.");
    }
  };


  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    showAlert("🗑️ Note deleted successfully!","danger");
  };

  
  const editNote = (index) => {
    const updatedNote = prompt("✏️ Edit your note:", notes[index]);
    if (updatedNote !== null && updatedNote.trim() !== "") {
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes);
      showAlert("🔄 Note updated successfully!","warning ");
    }
  };

  return (
    <div className="my-3">
      <h3 style={{ color: mode === "dark" ? "white" : "black" }}>Your Notes</h3>

      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addNote}>
          Add
        </button>
      </div>

      <ul className="list-group my-3">
        {notes.map((note, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center bg-${mode} text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            {note}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => editNote(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
