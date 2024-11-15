import React, { useState } from 'react'; 
import GuestInput from './GuestInput';
import GuestList from './GuestList ';
import SeatingArrangement from './SeatingArrangement';
import ExportData from './ExportData';

const GuestManager = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, guest]);
  };

  return (
    <div>
      <h1>Event Guest List Management</h1>
      <GuestInput addGuest={addGuest} />
      <GuestList guests={guests} />
      <SeatingArrangement guests={guests} />
      <ExportData guests={guests} />
    </div>
  );
};

export default GuestManager;
