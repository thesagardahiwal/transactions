import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import { fetchTransactions, fetchStatistics, fetchPriceRanges } from './services/api';

function App() {
  const [month, setMonth] = useState(3);
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [statistics, setStatistics] = useState({});
  const [priceRanges, setPriceRanges] = useState([]);

  useEffect(() => {
    fetchTransactions(month, search, page).then((res) => setTransactions(res.data.data));
    fetchStatistics(month).then((res) => setStatistics(res.data));
    fetchPriceRanges(month).then((res) => setPriceRanges(res.data));
  }, [month, search, page]);

  return (
    <div>
      <Header month={month} setMonth={setMonth} />
      <TransactionTable
        transactions={transactions}
        search={search}
        page={page}
        onSearch={setSearch}
        onNext={() => setPage((prev) => prev + 1)}
        onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
      />
      <Statistics statistics={statistics} />
      <BarChart priceRanges={priceRanges} />
    </div>
  );
}

export default App;
