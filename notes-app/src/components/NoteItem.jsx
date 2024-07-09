const NoteItem = ({ note, toggleImportant, deleteNote }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <div>
        <h3 className="text-lg font-bold">{note.text}</h3>
        <p className={note.important ? "text-red-500" : "text-gray-500"}>
          {note.important ? "Important" : "Regular"}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => toggleImportant(note.id)}
          className="text-blue-600 hover:text-blue-800 mr-4 transition-colors duration-200"
        >
          {note.important ? "Unmark" : "Important"}
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className="text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default NoteItem;
