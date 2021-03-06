import React from 'react';
import { StyledHero } from './Hero.styled';

export default class SlideOneIntro extends React.Component {
  render() {
    return (
      <StyledHero>
        <div className="greeting" className="block">
          <p>
            Welcome to my personal website.
          </p>
        </div>
      </StyledHero>
    )
  }
}
