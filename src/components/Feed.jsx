// src/components/Feed.jsx
import { useState, useEffect } from "react";
import Header from "./Header";
import PostCard from "./PostCard";

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Alice Dupont", content: "Voici mon premier post !", initialLikes: 5 },
    { id: 2, author: "John Doe", content: "React, c’est génial", initialLikes: 3 }
  ]);

  const handleAddPost = () => {
    // Ajoute un nouveau post au tableau
    const newPost = {
      id: posts.length + 1,
      author: "Nouvel Auteur",
      content: "Nouveau post ajouté !",
      initialLikes: 0
    };

    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  useEffect(() => {
    document.title = `ReactBook | ${posts.length} Posts`;
  }, [posts]);

  return (
    <div style={{ textAlign: "center" }}>
      <Header onAddPost={handleAddPost} />
      <h2>Total de posts : {posts.length}</h2>
      {posts.map(post => (
        <PostCard
          key={post.id}
          author={post.author}
          content={post.content}
          initialLikes={post.initialLikes}
        />
      ))}
    </div>
  );
}

export default Feed;
