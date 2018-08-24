import styled from 'styled-components';
import woodTexture from '../assets/wood-texture.svg';

const ButtonStyle = styled.button`
  border: none;
  background: #e5b85c url(${woodTexture});
  font-size: 1.2em;
  font-family: 'Cabin', 'Arial', sans-serif;
  padding: 1em 2em;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;

export default ButtonStyle;
