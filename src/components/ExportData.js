import React from 'react';

const ExportData = ({ guests }) => {
  const handleExport = () => {
    const data = JSON.stringify(guests, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'guests.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Export Guest Data</h2>
      <button onClick={handleExport}>Export as JSON</button>
    </div>
  );
};

export default ExportData;
