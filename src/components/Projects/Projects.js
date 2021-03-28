import { React, useState } from 'react';
import { StyledArt } from '../ArtPage/Art.styled';
import { NavLink } from 'react-router-dom';
import { BasicCard } from '../BasicCard';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PageLoader from '../PageLoader';

//card elements for programming projects
const codeCards = <div className="grid-container">
    <NavLink className="lorikeet" activeClassName="active" exact to={'./lorikeet'} >
        <BasicCard className="grid-item" imgSource="HackBeanpot" title="Vaccine Waste" medium="Hack Beanpot 2021"
            dimensions="Interactive web application that tracks wasted COVID-19 vaccine doses" />
    </ NavLink>

</div>;

//card elements for art projects
const artCards = <div className="grid-container">
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


export default function Projects() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <PageLoader />
            <StyledArt>
                <div className="test">
                    <AppBar className="tab-labels" position="static">
                        <Tabs value={value} fullWidth={true} centered={true} onChange={handleChange}>
                            <Tab label="code" />
                            <Tab label="art" />
                            <Tab label="photography" />
                        </Tabs>
                    </AppBar>
                </div>
                {value == 0 && <>{codeCards}</>}
                {value == 1 && <>{artCards}</>}
                {value == 2 && <>{codeCards}</>}

                {/* <Paper>
                    hello
                </Paper> */}
                
            </StyledArt>
        </div>
    );
}