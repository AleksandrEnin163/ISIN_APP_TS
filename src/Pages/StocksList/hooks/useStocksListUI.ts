import { StocksListEntity, useStocksListEntity } from './useStocksListEntity'
import { Stocks } from '../components/Stocks/Stocks';

type StocksListProps = React.ComponentProps<typeof Stocks>;

type Result = {
  loading: boolean;
  error: boolean;
  data: StocksListProps | null;
};

const mapStocksListEntityToStocksListUI = (stocksListEntity: StocksListEntity | null): StocksListProps | null => {
  if (!stocksListEntity) {
    return null;
  }

  return stocksListEntity.map((stock) => ({
    imageUrl: stock.imageUrl,
    name: stock.name,
    price: stock.price,
    id: stock.id,
    indexName: stock.indexName,
    isin: String(stock.isin)
  }));
};

export const useStocksListUi = (): Result => {
  const { data, loading, error } = useStocksListEntity();

  return { data: mapStocksListEntityToStocksListUI(data), loading, error };
};
