import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const CoupleName = styled.h1`
  font-family: 'Cursive', sans-serif;
  font-size: 2.5rem;
  color: #333;
`;

const Date = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CoupleName>John & Jane</CoupleName>
      <Date>Saturday, December 12, 2024</Date>
    </HeaderContainer>
  );
};

export default Header;
