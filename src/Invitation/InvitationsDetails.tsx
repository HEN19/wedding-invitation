import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const InvitationText = styled.p`
  font-family: 'Cursive', sans-serif;
  font-size: 1.5rem;
  color: #333;
`;

const InvitationDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <InvitationText>
        We invite you to celebrate our wedding day! Please join us for a day of love and celebration.
      </InvitationText>
      <InvitationText>
        Location: The Grand Hall, City Center<br />
        Time: 3:00 PM
      </InvitationText>
    </DetailsContainer>
  );
};

export default InvitationDetails;
