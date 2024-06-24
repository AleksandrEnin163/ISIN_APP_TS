import { Stocks } from './components/Stocks/Stocks';
import { useStocksListUi } from './hooks/useStocksListUI';

function StocksList() {
  const { data, loading, error } = useStocksListUi();
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Mistake with data fetching</h3>;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <Stocks stocks={data} />
  );
}

export default StocksList;