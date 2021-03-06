import React from 'react';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './BurgerMenu.styled';


export const BurgerMenu = ({ options, open }) => {
    return (
        <StyledMenu open={open}>
            <div className="inner-menu">
                <ul className="drawerLiNavOption">
                    {options.map(
                        option =>
                            <li>
                                <NavLink className="drawerNavOption" activeClassName="active" to={option.path}>
                                    {option.name}
                                </NavLink>
                            </li>
                    )}
                </ul>
            </div>
        </StyledMenu>
    )
}
BurgerMenu.propTypes = {
    open: bool.isRequired,
}

export default BurgerMenu;