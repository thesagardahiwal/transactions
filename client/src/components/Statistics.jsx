// src/components/Statistics.jsx
import React from 'react';

const Statistics = ({ statistics }) => {
  return (
    <div className="flex justify-around p-4 bg-gray-100 my-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{statistics.totalSaleAmount || 0}</h2>
        <p>Total Sale Amount</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{statistics.totalSoldItems || 0}</h2>
        <p>Total Sold Items</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{statistics.totalNotSoldItems || 0}</h2>
        <p>Total Unsold Items</p>
      </div>
    </div>
  );
};

export default Statistics;
