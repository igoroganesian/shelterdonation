import React, { useState } from 'react';
import DonationForm from './components/DonationForm';

const App = () => {
  const [donations, setDonations] = useState([]);

  const addDonation = (newDonation) => {
    setDonations([...donations], newDonation);
  };

  const handleEditDonation = (index) => {

  };

  const handleDeleteDonation = (index) => {
    setDonations(donations.filter((_, donationIndex => donationIndex !== index)));
  };

  return (
    <div>
      <DonationForm addDonation={addDonation} />
      <DonationList
        donations={donations}
        onEdit={handleEditDonation}
        onDelete={handleDeleteDonation}
      />
    </div>
  );
};

export default App;
