import React from 'react';
import '../../css/recruiters/InterviewStage.css'

const InterviewStage = ({ stage, disabled, data, onChange, onComplete }) => {
  return (
    <div className={`interview-stage ${disabled ? 'disabled' : ''}`}>
      <h3>Stage {stage}</h3>
      <label>Score:
        <input
          type="text"
          value={data.score}
          disabled={disabled}
          onChange={(e) => onChange(stage, 'score', e.target.value)}
        />
      </label>
      <label>Remarks:
        <textarea
          value={data.remarks}
          disabled={disabled}
          onChange={(e) => onChange(stage, 'remarks', e.target.value)}
        />
      </label>
      {!disabled && (
        <button onClick={onComplete}>Mark Stage {stage} Complete</button>
      )}
    </div>
  );
};

export default InterviewStage;
