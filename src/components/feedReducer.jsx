// src/components/feedReducer.js
export default function feedReducer(state, action) {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = { ...action.payload, comments: action.payload.comments || [] };
      return [...state, newPost];
    }

    case 'TOGGLE_LIKE': {
      const { id } = action.payload;
      return state.map(post => {
        if (post.id !== id) return post;
        const liked = !post.liked;
        const likes = liked ? post.likes + 1 : Math.max(0, post.likes - 1);
        return { ...post, liked, likes };
      });
    }

    case 'DELETE_POST': {
      const { id } = action.payload;
      return state.filter(post => post.id !== id);
    }

    case 'EDIT_POST': {
      const { id, content } = action.payload;
      return state.map(post => post.id === id ? { ...post, content } : post);
    }

    case 'ADD_COMMENT': {
      const { postId, comment } = action.payload;
      return state.map(post => {
        if (post.id !== postId) return post;
        const nextComments = post.comments ? [...post.comments, comment] : [comment];
        return { ...post, comments: nextComments };
      });
    }

    case 'EDIT_COMMENT': {
      const { postId, commentId, text } = action.payload;
      return state.map(post => {
        if (post.id !== postId) return post;
        const nextComments = (post.comments || []).map(c => c.id === commentId ? { ...c, text } : c);
        return { ...post, comments: nextComments };
      });
    }

    case 'DELETE_COMMENT': {
      const { postId, commentId } = action.payload;
      return state.map(post => {
        if (post.id !== postId) return post;
        const nextComments = (post.comments || []).filter(c => c.id !== commentId);
        return { ...post, comments: nextComments };
      });
    }

    default:
      return state;
  }
}
