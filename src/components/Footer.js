import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledFooter = styled.footer`
  height: 8rem;
  width: 100%;
`;

class Footer extends Component {
  render() {
    const {message} = this.props;
    return (
      <StyledFooter>
        <Button type={'bar'} message={message} />
      </StyledFooter>
    );
  }
}

export default Footer;
