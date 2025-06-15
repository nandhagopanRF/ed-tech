import React, { useState } from 'react';
import InterviewStage from './InterviewStage';
import { useApplicationContext } from '../../context/ApplicationContext';

const stageToStatus = {
  1: 'Phone Interview',
  2: 'In-Person Interview',
  3: 'HR Interview',
};

const InterviewStageTracker = ({
  stageRefs,
  currentStage,
  setCurrentStage,
  studentId,
  jobId
}) => {
  const { updateApplicationStatus } = useApplicationContext();

  const [data, setData] = useState({
    1: { score: '', remarks: '' },
    2: { score: '', remarks: '' },
    3: { score: '', remarks: '' },
  });

  const updateStage = (stage, field, value) => {
    setData(prev => ({
      ...prev,
      [stage]: { ...prev[stage], [field]: value },
    }));
  };

  const completeStage = (stage) => {
    const newStage = stage + 1;
    const newStatus = stageToStatus[stage];

    if (newStatus) {
      updateApplicationStatus(studentId, jobId, newStatus);
    }

    if (stage < 3) {
      setCurrentStage(newStage);
    }
  };

  return (
    <div className="stage-tracker">
      {[1, 2, 3].map(stage => (
        <div ref={stageRefs[stage - 1]} key={stage}>
          <InterviewStage
            stage={stage}
            disabled={stage > currentStage}
            data={data[stage]}
            onChange={updateStage}
            onComplete={() => completeStage(stage)}
          />
        </div>
      ))}
    </div>
  );
};

export default InterviewStageTracker;
