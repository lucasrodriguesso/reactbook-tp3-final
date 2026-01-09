import { useState } from "react";

function Comment({ postId, comment, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(comment.text);

  const handleSave = () => {
    dispatch({ type: 'EDIT_COMMENT', payload: { postId, commentId: comment.id, text: value } });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_COMMENT', payload: { postId, commentId: comment.id } });
  };

  return (
    <div className="comment-item">
      <div className="comment-meta">
        <strong>{comment.author}</strong>
        <span style={{ marginLeft: 8, color: '#666', fontSize: 12 }}>{new Date(comment.createdAt).toLocaleString()}</span>
      </div>

      {isEditing ? (
        <div>
          <input className="input" value={value} onChange={e => setValue(e.target.value)} />
          <div className="comment-actions">
            <button className="btn primary" onClick={handleSave}>Enregistrer</button>
            <button className="btn ghost" onClick={() => setIsEditing(false)}>Annuler</button>
          </div>
        </div>
      ) : (
        <p className="comment-text" style={{ marginTop: 4 }}>{comment.text}</p>
      )}

      {!isEditing && (
        <div className="comment-actions" style={{ marginTop: 6 }}>
          <button className="btn" onClick={() => setIsEditing(true)}>Modifier</button>
          <button className="btn ghost" onClick={handleDelete}>Supprimer</button>
        </div>
      )}
    </div>
  );
}

export default Comment;
