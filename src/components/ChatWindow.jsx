// ChatPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChatWindow.css';

export default function ChatPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button onClick={() => navigate(-1)}>←</button>
        <h3>{username}</h3>
      </div>
      <div className="chat-body">
        <p>This is a DM with {username}</p>
      </div>
    </div>
  );
}
