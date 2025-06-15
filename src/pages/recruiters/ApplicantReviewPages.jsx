
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const dummyApplicant = {
  name: 'John Doe',
  description: 'Full-stack developer with 5+ years of experience in React and Node.js.',
  coverLetter: `Dear Hiring Manager,\nI am excited to apply for the position at your esteemed company. My background in software engineering...`,
  resumeUrl: '/dummy_resume.pdf',
};

const CoverLetterPreview = ({ letter }) => {
  const [expanded, setExpanded] = useState(false);
  const topLine = letter.split('\n')[0];
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Cover Letter</h2>
      <p>{expanded ? letter : topLine + '...'}</p>
      {!expanded && <button className="text-blue-500 underline" onClick={() => setExpanded(true)}>Read more</button>}
    </div>
  );
};

const ResumeViewer = ({ url }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Resume</h2>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="mt-2">
        <button
          onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-2 py-1 bg-gray-200 mr-2"
        >Prev</button>
        <button
          onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="px-2 py-1 bg-gray-200"
        >Next</button>
        <p className="mt-1">Page {pageNumber} of {numPages}</p>
      </div>
    </div>
  );
};

const InterviewStage = ({ stage, currentStage, updateStage, data, setData }) => {
  const disabled = stage > currentStage;
  const handleChange = (field, value) => {
    setData(prev => ({
      ...prev,
      [stage]: {
        ...prev[stage],
        [field]: value,
      },
    }));
  };

  return (
    <div className={`border p-4 mb-2 ${disabled ? 'opacity-50' : ''}`}>
      <h3 className="text-lg font-medium">Stage {stage}</h3>
      {currentStage >= stage && (
        <>
          <label className="block mb-1">Score:
            <input
              type="number"
              className="border ml-2 p-1"
              value={data[stage].score}
              onChange={(e) => handleChange('score', e.target.value)}
            />
          </label>
          <label className="block mb-2">Remarks:
            <textarea
              className="border w-full p-1"
              value={data[stage].remarks}
              onChange={(e) => handleChange('remarks', e.target.value)}
            />
          </label>
          {currentStage === stage && (
            <button className="bg-green-500 text-white px-4 py-1" onClick={() => updateStage(stage + 1)}>Mark Complete</button>
          )}
        </>
      )}
    </div>
  );
};

const InterviewStageTracker = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [data, setData] = useState({
    1: { score: '', remarks: '' },
    2: { score: '', remarks: '' },
    3: { score: '', remarks: '' },
  });

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Interview Progress</h2>
      {[1, 2, 3].map(stage => (
        <InterviewStage
          key={stage}
          stage={stage}
          currentStage={currentStage}
          updateStage={setCurrentStage}
          data={data}
          setData={setData}
        />
      ))}
    </div>
  );
};

const ApplicantReviewPage = () => {
  const applicant = dummyApplicant;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Applicant: {applicant.name}</h1>
      <p className="mb-4 text-gray-700">{applicant.description}</p>

      <CoverLetterPreview letter={applicant.coverLetter} />
      <ResumeViewer url={applicant.resumeUrl} />
      <InterviewStageTracker />
    </div>
  );
};

export default ApplicantReviewPage;
