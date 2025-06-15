import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PostList from '../components/PostList';
import NewPost from '../components/NewPost';
import MessagesSidebar from '../components/MessagesSidebar';
import { usePostContext } from '../context/PostContext';
import '../css/LandingPage.css';

export default function MainPage() {
  const { posts, addPost } = usePostContext();
  const [showMessages, setShowMessages] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);

  const toggleMessages = () => setShowMessages(!showMessages);
  const toggleNewPost = () => setShowNewPost(!showNewPost);

  return (
    <motion.div className="main-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="side-placeholder" />
      
      {/* Hamburger icon (visible only on mobile) */}
      {!showMessages && (
      <div className="hamburger" onClick={toggleMessages}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      )}

      <motion.div className="feed-container" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <button className="toggle-post-button" onClick={toggleNewPost}>
          {showNewPost ? 'Close Post' : 'New Post'}
        </button>

        {showNewPost && <NewPost onAddPost={addPost} />}
        <PostList posts={posts} />
      </motion.div>

      <motion.div
        className={`messages-container ${showMessages ? 'show' : ''}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MessagesSidebar onClose={() => setShowMessages(false)} />
      </motion.div>
    </motion.div>
  );
}
