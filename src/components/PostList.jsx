import React from 'react';
import Post from '../components/Post';
import '../css/PostList.css';

export default function PostList({ posts }) {
  return (
    <div className="postlist-container">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
