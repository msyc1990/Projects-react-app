import { useState } from "react";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { id: Date.now(), text: newNote, import: false }]);
      setNewNote("");
    }
  };

  const toggleImportant = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new note..."
        />
        <button
          onClick={addNote}
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add
        </button>
      </div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          toggleImportant={toggleImportant}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};
export default NoteList;
