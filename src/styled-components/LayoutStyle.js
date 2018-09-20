import styled from 'styled-components';
import diamondTexture from '../assets/diamond-texture.svg';

const LayoutStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff3dd;
  background-image: url(${diamondTexture});
  color: #33250A;
  font-family: 'Cabin', 'Arial', sans-serif;
  text-align: center;
`;

// background-image from heropattens.com

export default LayoutStyle;
