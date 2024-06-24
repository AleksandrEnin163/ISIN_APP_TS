import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import StockDetail from './Pages/StockDetail/StockDetail';
import WatchList from './Pages/WatchList/WatchList';
import StocksList from './Pages/StocksList/StocksList';

function App() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StocksList />} />
        <Route path="/stocks/:id" element={<StockDetail />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/watchlist/stocks/:id" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
