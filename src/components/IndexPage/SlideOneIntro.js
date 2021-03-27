import React from 'react';
import { StyledHero } from './Hero.styled';

export default class SlideOneIntro extends React.Component {

  constructor(props) {
    super(props);
    this.phrase = props.text;
  }

  render() {
    return (
      <StyledHero>
        <div className="greeting" className="block">
          <p>
            {this.phrase}
          </p>
        </div>
      </StyledHero>
    )
  }
}
