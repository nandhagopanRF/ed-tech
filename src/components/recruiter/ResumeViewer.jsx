import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResumeViewer = ({ fileUrl = '/nandhagopan.pdf' }) => {
    const [keyword, setKeyword] = useState('');

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const searchPluginInstance = searchPlugin();

    const handleSearch = () => {
        if (keyword.trim() !== '') {
            searchPluginInstance.highlight(keyword);
        }
    };

    return (
        <div className="resume-viewer-container">
            <h2>Resume</h2>
            <div style={{ height: '750px', border: '1px solid #ccc' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={fileUrl}
                        defaultScale={1}
                        plugins={[defaultLayoutPluginInstance, searchPluginInstance]}
                    />
                </Worker>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter word to search in resume"
                    style={{ padding: '8px', width: '300px', fontSize: '16px' }}
                />
                <button onClick={handleSearch} style={{ padding: '8px 12px', marginLeft: '8px' }}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default ResumeViewer;
