// context/PostContext.jsx
import React, { createContext, useState, useContext, useRef, useEffect} from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('feedPosts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage when they change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    localStorage.setItem('feedPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    const newPost = { ...post, id: Date.now(), comments: [], likes: 0 };
    setPosts((prev) => [newPost, ...prev]);
  };

  const addComment = (postId, comment) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };
  

  const toggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };
  const deletePost = (postId) => {
  setPosts((prev) => prev.filter((post) => post.id !== postId));
};


  return (
    <PostContext.Provider value={{ posts, addPost, addComment, toggleLike, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
