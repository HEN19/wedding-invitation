import React from 'react';
import Header from './Header/Header';
import InvitationDetails from './Invitation/InvitationsDetails';
import RSVPForm from './RSVP/RSVPForm';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <InvitationDetails />
      <RSVPForm />
      <Footer />
    </div>
  );

}

export default App;
