import React from "react";
import useFormInput from "../hooks/useFormInput";
import { useToast } from "../context/ToastContext";

function CommentForm({ postId, dispatch }) {
  const author = useFormInput("");
  const text = useFormInput("");
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.value.trim()) return;

    const newComment = {
      id: Date.now(),
      author: author.value.trim() || 'Anonyme',
      text: text.value.trim(),
      createdAt: new Date().toISOString()
    };

    try {
      dispatch({ type: 'ADD_COMMENT', payload: { postId, comment: newComment } });
      showToast('Commentaire publié', 'success');
      if (author.reset) author.reset("");
      if (text.reset) text.reset("");
    } catch (err) {
      showToast('Erreur lors de l\'envoi du commentaire', 'error');
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit} style={{ marginTop: '0.5rem' }}>
      <input className="input" placeholder="Votre nom" value={author.value} onChange={author.onChange} style={{ maxWidth: 140 }} />
      <input className="input" placeholder="Écrire un commentaire..." value={text.value} onChange={text.onChange} />
      <button className="btn" type="submit">Répondre</button>
    </form>
  );
}

export default CommentForm;
