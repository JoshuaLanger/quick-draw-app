import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamily['title']};
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 3.6rem;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Heading3 = styled.h2`
  font-size: 3rem;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Heading4 = styled.h4`
  font-size: 2.4rem;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Paragraph = styled.h4`
  font-size: 1.6rem;
  font-family: ${props => props.theme.fontFamily['body']};
`;

export { Title, Heading2, Heading3, Heading4, Paragraph };
