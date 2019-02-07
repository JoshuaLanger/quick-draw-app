import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledFooter = styled.footer`
  height: 8rem;
  width: 100%;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <Button />
      </StyledFooter>
    );
  }
}

export default Footer;
