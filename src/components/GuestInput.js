import React, { useState } from 'react';

const GuestInput = ({ addGuest }) => {
  const [name, setName] = useState('');
  const [rsvp, setRsvp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuest({ name, rsvp });
    setName('');
    setRsvp(false);
  };

  return (
    <div>
      <h2>Add Guest</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Guest Name"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={rsvp}
            onChange={() => setRsvp(!rsvp)}
          />
          RSVP Confirmed
        </label>
        <button type="submit">Add Guest</button>
      </form>
    </div>
  );
};

export default GuestInput;
