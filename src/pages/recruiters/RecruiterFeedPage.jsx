// pages/recruiters/RecruiterFeedPage.jsx
import React from 'react';
import { usePostContext } from '../../context/PostContext';
import PostList from '../../components/PostList';
import NewPost from '../../components/NewPost';
import MessagesSidebar from '../../components/MessagesSidebar';
import { motion } from 'framer-motion';

export default function RecruiterFeedPage() {
  const { posts, addPost } = usePostContext();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>your feed</h2>
      <NewPost onAddPost={addPost} />
      <PostList posts={posts} />
      
    </div>
  );
}
//<motion.div className="messages-container" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
//        <MessagesSidebar />
//      </motion.div>