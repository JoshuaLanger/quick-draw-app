import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Footer.propTypes = {
  message: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
