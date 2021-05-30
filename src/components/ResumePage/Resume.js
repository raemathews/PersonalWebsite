import React from 'react';
import { Document, Page, } from 'react-pdf';
import resume from '../../images/Mathews_Raven_Resume.png'
import resumepdf from '../../images/Mathews_Raven_Resume.pdf';
import PageLoader from '../PageLoader';
import { StyledPDF } from './PDF.styled';
import FloatingButton from '../FloatingButton';
import { StyledFloatingButton } from '../FloatingButton.styled';



// function Resume() {
//   return (
//     <Document file={myResume}>
//               <Page pageNumber={1} />
//     </Document>
//   );
// }

const Resume = () => {
  return (
    <StyledPDF>
      <PageLoader className="load" />
      <div className="content">
        <img className="pdf" src={resume}></img>
        <div className="download">
          <a href={resumepdf} download="MathewsRavenResume.pdf" >Save for Later</a>
        </div>
      </div>
    </StyledPDF>
  )
}
export default Resume;