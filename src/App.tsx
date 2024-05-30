import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Stocks from './Pages/Stocks/Stocks';
import StockDetail from './Pages/StockDetail/StockDetail';
import WatchList from './Pages/WatchList/WatchList';



function App() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Stocks />} />
        <Route path="/stocks/:stockId" element={<StockDetail />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
