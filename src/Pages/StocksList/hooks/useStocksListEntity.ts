import axios from 'axios';
import { useQuery } from 'react-query';

type Stocks = {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
    indexName: string;
    isin: number;
  }

export type StocksListEntity = Array<Stocks>

type RawData = {
  image_url: string;
  stock_name: string;
  stock_price: string;
  id: string;
  index: string;
  isin: string;
};

type RawDataArray = Array<RawData>;

type Result = {
  loading: boolean;
  error: boolean;
  data: StocksListEntity | null;
};

const mapRawData = (rawData: RawDataArray): StocksListEntity => {
    return rawData.map((stock) => ({
      imageUrl: stock.image_url,
      name: stock.stock_name,
      price: stock.stock_price,
      id: stock.id,
      indexName: stock.index,
      isin: Number(stock.isin)
    }));
  };

export const useStocksListEntity = (): Result => {
  async function fetchStocks() {
    const { data } = await axios.get(`/api/stocks`);
    return data;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['stocks'],
    queryFn: fetchStocks
  });

  if (isLoading || isError || !data) {
    return {
      data: null,
      loading: isLoading,
      error: isError
    };
  }

  return { data: mapRawData(data), loading: isLoading, error: isError };
};