import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledArt } from './Art.styled';
import { BasicCard } from '../BasicCard';
import PageLoader from '../PageLoader';

import UniversalLoader from '../UniversalLoadFunction';


const cards = <div className="grid-container">
    <NavLink className="lorikeet" activeClassName="active" exact to={'./lorikeet'} >
        <BasicCard className="grid-item" imgSource="lorikeet" title="Rainbow Lorikeet" subtitle="original photographer unknown"
            medium="colored pencil on bristol" dimensions="18 x 24 in." />
    </ NavLink>

    <NavLink className="self-portrait" activeClassName="active" exact to={'./self-portrait'} >
        <BasicCard className="grid-item" imgSource="portrait" title="Self Portrait" subtitle="collage of digitally reproduced charcoal marks"
            medium="paper and glue on bristol" dimensions="18 x 24 in." />
    </ NavLink>

    <NavLink className="cezanne" activeClassName="active" exact to={'./cezanne'} >
        <BasicCard className="grid-item" imgSource="cezanne" title="Cezanne" subtitle="appropriation of Still Life with Skull by Paul Cezanne"
            medium="masking tape on vellum" dimensions="7.5 x 9 in." />
    </ NavLink>

</div>;


/*custom react hook*/
function usePageContent() {

    const [pageContent, setPageContent] = useState(<PageLoader />);

    const toggleContent = (isLoading) => {
        if (isLoading) {
            setPageContent(
                <PageLoader />
            )
        }
        else {
            setPageContent(
                <StyledArt>
                    <div className="title-contents">
                        <div className="page-title">Art Projects</div>
                    </div>
                    {cards}
                </StyledArt>
            )
        }
    }

    return { pageContent, toggleContent };
}


/*art page content*/
function Art() {
    const { pageContent, toggleContent } = usePageContent();

    useEffect(() => {
        toggleContent(false)
    }, [])

    return(
        pageContent
    )
}


export default Art;
