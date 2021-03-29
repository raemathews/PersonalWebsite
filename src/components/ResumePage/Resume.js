import React from 'react';
import { Document, Page, } from 'react-pdf';
import resume from '../../images/Mathews_Raven_Resume.png'
import PageLoader from '../PageLoader';
import { StyledPDF } from './PDF.styled';



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
      <PageLoader className="load"/>
      <img src={resume}></img>
    </StyledPDF>
  )
}
export default Resume;