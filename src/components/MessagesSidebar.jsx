// MessagesSidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MessagesSidebar.css';

const users = [
  { name: 'Eleanor Pena', role: 'UX Designer', company: 'Google' },
  { name: 'Theresa Webb', role: 'Frontend Dev', company: 'Meta' },
  { name: 'Albert Flores', role: 'Product Manager', company: 'Spotify' },
  { name: 'Arlene McCoy', role: 'Backend Dev', company: 'Netflix' },
  { name: 'Jacob Jones', role: 'AI Researcher', company: 'OpenAI' },
];

export default function MessagesSidebar({ onClose }) {
  const navigate = useNavigate();

  const handleUserClick = (user) => {
    navigate(`/chat/${encodeURIComponent(user.name)}`);
    if (onClose) onClose(); // Close sidebar on mobile after clicking
  };

  return (
    <div className="messages-sidebar">
      {/* Close icon for mobile */}
      {onClose && (
        <div className="close-icon" onClick={onClose}>
          ✕
        </div>
      )}
      <h3>Messaging</h3>
      {users.map((user) => (
        <div key={user.name} className="user-item" onClick={() => handleUserClick(user)}>
          <div className="dot" />
          <div className="user-name">{user.name}</div>
          <div className="tooltip">
            <div className="tooltip-card">
              <div className="profile-pic" />
              <div className="tooltip-info">
                <div className="role">{user.role}</div>
                <div className="company">{user.company}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
