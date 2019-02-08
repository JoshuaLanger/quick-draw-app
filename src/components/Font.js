import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.5;
  letter-spacing: 1.6px;
  font-weight: 400;
  font-family: ${props => props.theme.fontFamily['title']};
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 3.6rem;
  line-height: 1.5;
  letter-spacing: 1.6px;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Heading3 = styled.h2`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: 1.6px;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Heading4 = styled.h4`
  line-height: 1.3;
  font-size: 2.4rem;
  letter-spacing: 1.6px;
  font-family: ${props => props.theme.fontFamily['head']};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 1.2;
  font-family: ${props => props.theme.fontFamily['body']};
`;

export { Title, Heading2, Heading3, Heading4, Paragraph };
