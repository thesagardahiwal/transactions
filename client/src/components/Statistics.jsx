import React from 'react';

const Statistics = ({ statistics }) => {
  return (
    <div className="p-6 my-4 bg-white rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-4xl font-semibold text-blue-600">
          {statistics.totalSaleAmount || 0}
        </h2>
        <p className="text-gray-600 mt-2">Total Sale Amount</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-4xl font-semibold text-green-600">
          {statistics.totalSoldItems || 0}
        </h2>
        <p className="text-gray-600 mt-2">Total Sold Items</p>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-4xl font-semibold text-red-600">
          {statistics.totalNotSoldItems || 0}
        </h2>
        <p className="text-gray-600 mt-2">Total Unsold Items</p>
      </div>
    </div>
  );
};

export default Statistics;
