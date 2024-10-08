// src/components/Header.jsx
import React from 'react';

const Header = ({ month, setMonth }) => {
  return (
    <div className="w-full flex justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">Transaction Dashboard</h1>
      <div>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="bg-white text-black p-2 rounded-md"
        >
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => (
            <option value={i + 1} key={i}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
