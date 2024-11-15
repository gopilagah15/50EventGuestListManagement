import React from 'react';

const GuestList = ({ guests }) => {
  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
            {guest.name} - RSVP: {guest.rsvp ? 'Confirmed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
