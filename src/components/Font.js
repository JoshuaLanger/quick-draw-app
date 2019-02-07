import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamily['title']};
  text-align: center;
`;

const Heading4 = styled.h4`
  font-size: 2.4rem;
  font-family: ${props => props.theme.fontFamily['head']};
`;

export { Title, Heading4 };
