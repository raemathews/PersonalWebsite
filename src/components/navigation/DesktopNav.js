import React from 'react';
import { StyledNav } from './Nav.styled';
import { NavLink } from 'react-router-dom';


export const DesktopNav = ({ options }) => {
    return (
        <StyledNav className="nav">
            <ul>
                {options.map(
                    option =>
                        option.name == 'contact me' ?
                            <li>
                                <button>
                                    <NavLink className="contactMe" activeClassName="active"
                                        exact to={option.path} >
                                        {option.name}
                                    </NavLink>
                                </button>
                            </li> :
                            <li>
                                <NavLink className="navOption" activeClassName="active"
                                    exact to={option.path} >
                                    {option.name}
                                </NavLink>
                            </li>
                )}
            </ul>
        </StyledNav>
    )
}

export default DesktopNav;