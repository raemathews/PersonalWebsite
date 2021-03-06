import React from 'react';
import {Document} from 'react-pdf';

const resumeContent =
  <Document
    file='./Resume.pdf'
  />;


const Resume = () => {

  return (
    <>
      {resumeContent}
    </ >
  );
};

export default Resume;