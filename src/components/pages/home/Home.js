import './home.scss';
import React, { useContext, useEffect, useState } from 'react';
import { TickersContext } from '../../context/TickersContext';
import CardsList from './CardsList';
import SearchList from './SearchList';
import Search from './Search';

function Home() {
  const { tickers, getTickers, streamedTickers } = useContext(TickersContext);

  const [searchTerm, setSearchTerm] = useState('');

  // get tickers once
  useEffect(() => {
    getTickers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearchTerm = (e) => {
    setSearchTerm('');
  };

  return (
    <div className='home'>
      {!tickers && <p>Loading....</p>}
      {/* Search input */}
      <Search searchTermHandler={searchTermHandler} searchTerm={searchTerm} />

      {/* Show crypto list */}
      <SearchList
        tickers={tickers}
        searchTerm={searchTerm}
        clearSearchTerm={clearSearchTerm}
      />

      {/* Crypto cards */}
      <CardsList streamedTickers={streamedTickers} />
    </div>
  );
}

export default Home;
