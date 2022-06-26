function Main(){
    return (
    <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" autoFocus />
            <textarea id="body" placeholder="Note it here..."></textarea>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">Title</h1>
            <div className="markdown-preview">note preview</div>
        </div>
    </div>
    );
}
export default Main;