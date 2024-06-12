import { useParams } from 'react-router-dom';
import { StockEntity, useStockEntity } from './useStockEntity';
import { Stock } from '../components/Stock/Stock';

type StockProps = React.ComponentProps<typeof Stock>;

type Result = {
  loading: boolean;
  error: boolean;
  data: StockProps;
};

const mapStockEntityToStockUI = (stockEntity: StockEntity): StockProps => {
  return {
    imageUrl: stockEntity.imageUrl,
    name: stockEntity.name,
    price: stockEntity.price,
    id: stockEntity.id,
    indexName: stockEntity.indexName,
    isin: String(stockEntity.isin)
  };
};

export const useStockUi = (): Result => {
  const id = useParams().id;
  const { data, loading, error } = useStockEntity(id);

  return { data: mapStockEntityToStockUI(data), loading, error };
};
