import React from 'react';

const SeatingArrangement = ({ guests }) => {
  return (
    <div>
      <h2>Seating Arrangement</h2>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
            {guest.name} - {guest.rsvp ? 'Seated' : 'No Seating Assigned'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatingArrangement;
