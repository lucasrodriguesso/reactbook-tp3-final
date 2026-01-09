// src/components/PostCard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function PostCard({ id, author, content, likes, liked, dispatch, comments = [] }) {
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const handleLike = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: { id } });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_POST', payload: { id } });
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'EDIT_POST', payload: { id, content: editValue } });
    setIsEditing(false);
  };

  return (
    <div className="post-card">
      <h3>
        <Link to={`/user/${encodeURIComponent(author)}`}>{author}</Link>
      </h3>

      {isEditing ? (
        <div>
          <textarea className="input" value={editValue} onChange={e => setEditValue(e.target.value)} />
          <div className="post-actions">
            <button className="btn primary" onClick={handleSaveEdit}>Enregistrer</button>
            <button className="btn ghost" onClick={() => setIsEditing(false)}>Annuler</button>
          </div>
        </div>
      ) : (
        <p>{content}</p>
      )}

      <p>Likes : {likes}</p>

      <div className="post-actions">
        <button className="btn" onClick={handleLike}>{liked ? 'Annuler J’aime' : 'J’aime'}</button>
        <button className="btn" onClick={() => setIsEditing(true)}>Modifier</button>
        <button className="btn ghost" onClick={handleDelete}>Supprimer</button>
        <button className="btn" onClick={() => setShowComments(s => !s)}>
          {showComments ? 'Cacher commentaires' : `Commentaires (${comments.length})`}
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {(comments || []).map(c => (
              <Comment key={c.id} postId={id} comment={c} dispatch={dispatch} />
            ))}
          </div>

          <CommentForm postId={id} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
}

export default PostCard;
