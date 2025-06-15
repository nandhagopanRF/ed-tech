import React from 'react';
import '../../css/recruiters/InterviewStatusBar.css';

const InterviewStatusBar = ({ stageRefs, currentStage }) => {
  const handleClick = (index) => {
    if (index < currentStage) {
      const el = stageRefs[index]?.current;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="status-bar">
      {['Stage 1', 'Stage 2', 'Stage 3'].map((label, idx) => (
        <div
          key={idx}
          className={`status-segment ${idx < currentStage ? 'completed' : ''} ${idx === currentStage - 1 ? 'active' : ''}`}
          onClick={() => handleClick(idx)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default InterviewStatusBar;
