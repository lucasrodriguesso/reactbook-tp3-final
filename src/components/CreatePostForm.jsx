import React from "react";
import useFormInput from "../hooks/useFormInput";
import { useToast } from "../context/ToastContext";

function CreatePostForm({ dispatch, posts }) {
  const author = useFormInput("");
  const content = useFormInput("");
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: posts && posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      author: author.value.trim() || "Nouvel Auteur",
      content: content.value,
      likes: 0,
      liked: false,
      comments: []
    };

    try {
      dispatch({ type: 'ADD_POST', payload: newPost });
      showToast('Post publié', 'success');
      if (author.reset) author.reset("");
      if (content.reset) content.reset("");
    } catch (err) {
      showToast('Erreur lors de la publication', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <input
        className="input"
        type="text"
        placeholder="Nom de l'auteur"
        value={author.value}
        onChange={author.onChange}
        style={{ maxWidth: '180px' }}
      />
      <input
        className="input"
        type="text"
        placeholder="Écrivez un message..."
        value={content.value}
        onChange={content.onChange}
      />
      <button className="btn primary" type="submit">Publier</button>
    </form>
  );
}

export default CreatePostForm;
