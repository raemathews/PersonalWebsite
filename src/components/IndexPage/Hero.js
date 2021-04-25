import React from 'react';
import { StyledHero } from './Hero.styled';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import { Page } from 'react-pdf';
import PageLoader from '../PageLoader';

export default class Hero extends React.Component {
  render() {
    return (
      <StyledHero>
        <div className="block">
          <p>Hello world, my name is<span className="raemathews"> Rae Mathews
            <div className="contactButton">
              <NavLink activeClassName="active"
                exact to='/contact' >
              </NavLink>
            </div>
          </span>
          </p>
        </div>
      </StyledHero>
    )
  }
}