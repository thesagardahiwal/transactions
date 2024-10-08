import React from 'react';

const BarChart = ({ priceRanges }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Price Range Distribution</h2>
      <div className="space-y-2">
        {priceRanges.map((range, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span>{range.range}</span>
            <div className="w-full h-4 bg-gray-200 ml-4">
              <div
                style={{ width: `${range.count * 10}px` }}
                className="h-full bg-blue-600"
              ></div>
            </div>
            <span className="ml-2">{range.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
