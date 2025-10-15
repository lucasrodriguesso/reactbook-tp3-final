// src/components/PostCard.jsx
import { useState } from "react";

function PostCard({ author, content, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  
  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  
  const handleReset = () => {
    setLikes(initialLikes);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <h3>{author}</h3>
      <p>{content}</p>
      <p>Likes : {likes}</p>
      <button onClick={handleLike}>J’aime</button>
      <button onClick={handleReset}>Réinitialiser</button>
    </div>
  );
}

export default PostCard;
