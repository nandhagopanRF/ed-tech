import '../../css/recruiters/ApplicantDetail.css';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicantDetails = ({ applicant }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  const previewLimit = 150;
  const isLong = applicant.coverLetter.length > previewLimit;
  const previewText = isLong ? applicant.coverLetter.slice(0, previewLimit) + '...' : applicant.coverLetter;

  return (
    <motion.div
      className="applicant-details"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img className="profile-pic" src={applicant.image || '/imagesprofile.png'} alt="Applicant" />
      <h1 className="name">{applicant.name}</h1>
      

      <div className="cover-letter-preview">
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.p
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {applicant.coverLetter}
            </motion.p>
          ) : (
            <motion.p
              key="collapsed"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {previewText}
            </motion.p>
          )}
        </AnimatePresence>

        {isLong && (
          <motion.button
            onClick={toggleExpanded}
            className="toggle-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {expanded ? 'Show Less ▲' : 'Read More ▼'}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ApplicantDetails;
