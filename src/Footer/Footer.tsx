import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>For inquiries: contact@wedding.com</p>
    </FooterContainer>
  );
};

export default Footer;
