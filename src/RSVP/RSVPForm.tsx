import { Carousel } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// Styled components for the forms
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; // Stack elements on smaller screens
    align-items: center; // Center align
  }
`;

const FormContainer = styled.div`
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 90%; // Use a percentage for smaller screens
    margin: 1rem 0; // Add vertical margin
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0; // Vertical margin
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin: 0.5rem 0; // Vertical margin
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MessageContainer = styled.div`
  margin-top: 2rem; // Space between the forms and the message section
  width: 60%; // Ensure full width for message container
  flex : 1;
  display: flex;
  flex-direction: column;
  background: blue,

`;

const MessageCard = styled.div`
  height: 103px;
  color: #fff;
  textAlign: center;
  background: #364d79;
  @media (max-width: 768px) {
    width: 90%; // Use a percentage for smaller screens
    margin: 1rem 0; // Add vertical margin
  }


`;
 

const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('Yes');
  const [messages, setMessages] = useState<{ name: string; message: string }[]>([]);
  const [giftMessage, setGiftMessage] = useState('');

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !attending) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guest_name: name,
          guest_email: email,
          attending: attending,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: data.message || 'Thank you for your RSVP!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.error || 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    setName('');
    setEmail('');
    setAttending('Yes');
  };

  const handleGiftMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (giftMessage) {
      setMessages([...messages, { name, message: giftMessage }]);
      setGiftMessage('');
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2>RSVP</h2>
        <form onSubmit={handleRSVPSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Select
            id="attending"
            name="attending"
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
          <Button type="submit">Submit RSVP</Button>
        </form>
      </FormContainer>

      <FormContainer>
        <h2>Wedding Gift Message</h2>
        <form onSubmit={handleGiftMessageSubmit}>
          <Input
            type="text"
            placeholder="Your Message"
            value={giftMessage}
            onChange={(e) => setGiftMessage(e.target.value)}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>

        <MessageContainer>
        {messages.length > 0 && (
          <Carousel dotPosition='right' infinite={false} autoplay>
            {messages.map((msg, index) => (
              <MessageCard key={index}>
                <strong>{msg.name}</strong>: {msg.message}
              </MessageCard>
            ))}
          </Carousel>
        )}
      </MessageContainer>
      </FormContainer>
    </Container>
  );
};

export default RSVPForm;
