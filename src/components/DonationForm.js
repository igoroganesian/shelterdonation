import React, { useState } from 'react';

const DonationForm = ({ addDonation }) => {
  const [donation, setDonation] = useState({
    donorName: '',
    donationType: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(donation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donor's Name:
        <input
          type="text"
          name="donorName"
          value={donation.donorName}
          onChange={handleChange}
        />
      </label>
      <label>
        Type of Donation:
        <select
          name="donationType"
          value={donation.donationType}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="money">Money</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Quantity/Amount:
        <input
          type="text"
          name="amount"
          value={donation.amount}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Donation:
        <input
          type="date"
          name="date"
          value={donation.date}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
