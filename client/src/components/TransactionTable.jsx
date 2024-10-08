// src/components/TransactionTable.jsx
import React, { useState } from 'react';

const TransactionTable = ({ transactions, onSearch, onNext, onPrev, search, page }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search transactions"
          className="p-2 border border-gray-300 rounded-md w-1/3"
        />
        <div>
          <button
            onClick={onPrev}
            disabled={page === 1}
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md"
          >
            Previous
          </button>
          <button onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Next
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{transaction.title}</td>
              <td className="py-2 px-4 border-b">{transaction.description}</td>
              <td className="py-2 px-4 border-b">{transaction.price}</td>
              <td className="py-2 px-4 border-b">{transaction.sold ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
