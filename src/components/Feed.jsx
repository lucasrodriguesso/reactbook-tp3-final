// src/components/Feed.jsx
import { useEffect, useReducer, useState, useMemo } from "react";
import PostCard from "./PostCard";
import CreatePostForm from "./CreatePostForm";
import Skeleton from "./Skeleton";
import feedReducer from "./feedReducer";

function Feed() {
  const initialPosts = [
     { id: 1, author: "Salome Cros", content: "Voici mon premier post !", likes: 5, liked: false },
     { id: 2, author: "Rodrigues Lucas", content: "React, c’est génial", likes: 3, liked: false }
  ];

  const [posts, dispatch] = useReducer(feedReducer, initialPosts, () => {
    try {
      const raw = localStorage.getItem('posts');
      return raw ? JSON.parse(raw) : initialPosts;
    } catch (e) {
      return initialPosts;
    }
  });

  const [search, setSearch] = useState("");
  const PAGE_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredPosts = useMemo(() => {
    const q = (search || "").toLowerCase().trim();
    if (!q) return posts;
    return posts.filter(p => {
      const author = (p.author || "").toLowerCase();
      const content = (p.content || "").toLowerCase();
      return author.includes(q) || content.includes(q);
    });
  }, [posts, search]);


  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search]);

  const handleAddPost = () => {
    const newPost = {
      id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      author: "Nouvel Auteur",
      content: "Nouveau post ajouté !",
      likes: 0,
      liked: false
    };

    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  useEffect(() => {
    document.title = `ReactBook | ${posts.length} Posts`;
  }, [posts]);

  useEffect(() => {
    try {
      localStorage.setItem('posts', JSON.stringify(posts));
    } catch (e) {
      // ignore storage errors
    }
  }, [posts]);

  return (
    <div className="app-container">
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        <input
          className="input"
          type="search"
          placeholder="Rechercher par auteur ou contenu..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: 420 }}
          aria-label="Recherche des posts"
        />
      </div>
      <CreatePostForm dispatch={dispatch} posts={posts} />
      <h2 style={{ textAlign: "center" }}>Total de posts : {posts.length}</h2>

      {filteredPosts.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>Aucun post trouvé.</p>
      )}

      {filteredPosts.slice(0, visibleCount).map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          likes={post.likes}
          liked={post.liked}
          comments={post.comments || []}
          dispatch={dispatch}
        />
      ))}

      {visibleCount < filteredPosts.length && (
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <button
            className="btn"
            onClick={() => {
              setIsLoadingMore(true);
              setTimeout(() => {
                setVisibleCount(c => Math.min(filteredPosts.length, c + PAGE_SIZE));
                setIsLoadingMore(false);
              }, 700);
            }}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'Chargement...' : 'Charger plus'}
          </button>
        </div>
      )}
      {isLoadingMore && (
        <div style={{ marginTop: 12 }}>
          <Skeleton lines={3} />
          <Skeleton lines={2} />
        </div>
      )}
    </div>
  );
}

export default Feed;
