import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./Components/Header/Header";
import Stocks from './Pages/Stocks/Stocks';
import StockDetail from './Pages/StockDetail/StockDetail';
import WatchList from './Pages/WatchList/WatchList';
import { useQuery } from 'react-query';

async function fetchStocks(){
  const { data } = await axios.get('/api/stocks')
  return data
}

function App() {

  const { data, isLoading, isError } = useQuery({ queryKey: ['stocks'], queryFn: fetchStocks })
  console.log(data)
  if(isLoading){
    return <h3>Loading...</h3>
  }

  if(isError){
    return <h3>Mistake with data fetching</h3>
  }

  if(!data){
    return <h3>No data</h3>
  }


  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Stocks stocks = {data} />} />
        <Route path="/stocks/:id" element={<StockDetail />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
