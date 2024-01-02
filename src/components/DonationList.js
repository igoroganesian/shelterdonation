import React, { useState } from 'react';

const DonationList = ({ donations, onEdit, onDelete }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredDonations = filter
    ? donations.filter(donation => donation.donationType === filter)
    : donations;

  return (
    <div>
      <label>
        Filter by Type:
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="money">Money</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="clothing">Other</option>
        </select>
      </label>

      <ul>
        {filteredDonations.map((donation, index) => (
          <li key={index}>
            {`${donation.donorName} donated ${donation.amount} of ${donation.donationType} on ${donation.date}`}
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;