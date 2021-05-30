import React from 'react';
import PageLoader from '../PageLoader';
import { StyledProjectPage } from './ProjectPage.styled.js';
import beanpot from '../../images/beanpot.png';
import LineGraphComp from './LineGraphComp';
import FloatingButton from '../FloatingButton';
import login from '../../images/login.PNG';
import ux from '../../images/HBPFigma.png';



const Hackbeanpot2021 = () => {

    return (
        <>
            <StyledProjectPage>
                <div className="page-title">
                    <h2 className="title-contents">Covid Vaccine Distribution Efficiency Dashboard</h2>
                </div>
                <div className="tools">
                    <ul>
                        <li className="titletag">Tools: </li>
                        <span className="tags">
                            <li className="tag">React.js</li>
                            <li className="tag">Java</li>
                            <li className="tag">MySQL</li>
                            <li className="tag">Spring Boot</li>
                        </span>
                    </ul>
                </div>
                <div className="intro-container">
                    <div className="introduction">
                        <p>The theme for Hack Beanpot 2021 was camping, with a focus on the themes of community, sustainability, and
                        using tools to reach shared goals. My team was comprised of myself plus three other Northeastern
                        students. We worked around the clock starting Friday, February 19th and ending with demos on
                        Sunday, the 21st. This hackathon was around the time of the Covid vaccine rollout, when many hospitals
                        and distribution centers were not able to efficiently use their supply; doses were
                        lost to cancelled appointments, no-shows, defrosting too early, etc.
                    </p>

                        <p>Since the theme of the hackathon was all about sustainability and community, we wanted to code
                        something that addressed this issue. Our original idea was to create a dashboard showing
                        regional statistics as well as an interface to connect patients with surplus
                        vaccines before they went to waste. However, we quickly realized that we would not
                        have time to implement both the dashboard and the patient side in our app, so we chose to focus on
                        the former. We went on to build this web app with a React frontend, a Spring boot API,
                        and a MySQL database.
                    </p>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="img-container"> 
                        <img src={ux} />
                    </div>
                    <LineGraphComp className="graph" />
                </div>
                <FloatingButton link="https://github.com/raemathews/HackBeanpot2021" />
            </StyledProjectPage>
        </>
    )
}
export default Hackbeanpot2021;