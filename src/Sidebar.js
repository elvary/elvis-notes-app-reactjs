function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote,}){
    return (<div className="app-sidebar">
        <div classname="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        
        <div className="app-sidebar-notes">
        {notes.map((note) => (
            <div 
            className="app-sidebar-note active" 
            onClick={() => setActiveNote(note.id)}
            >
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                </div>

                <p>{note.body && note.body.substr(0, 50) + '...'}</p>
                
                <small className="note-meta">
                {new Date(note.lastModified).toLocaleDateString('en-US', {
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })}
                </small>
            </div>
        ))}
        </div>
    </div>
)}
export default Sidebar;