import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledFooter = styled.footer`
  height: 8rem;
  width: 100%;
`;

class Footer extends Component {
  render() {
    const {message, handleClick} = this.props;
    return (
      <StyledFooter>
        <Button message={message} onClick={handleClick}/>
      </StyledFooter>
    );
  }
}

export default Footer;
