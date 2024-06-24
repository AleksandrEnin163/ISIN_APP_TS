import axios from 'axios';
import { useQuery } from 'react-query';

export type StockEntity = {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  indexName: string;
  isin: number;
};

type RawData = {
  image_url: string;
  stock_name: string;
  stock_price: string;
  id: string;
  index: string;
  isin: string;
};

type Result = {
  loading: boolean;
  error: boolean;
  data: StockEntity | null;
};

const mapRawData = (rawData: RawData): StockEntity => {
  return {
    imageUrl: rawData.image_url,
    name: rawData.stock_name,
    price: rawData.stock_price,
    id: rawData.id,
    indexName: rawData.index,
    isin: Number(rawData.isin)
  };
};

export const useStockEntity = (id?: string): Result => {
  async function fetchStockInfo() {
    const { data } = await axios.get(`/api/stock/${id}`);
    return data;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['stockInfo'],
    queryFn: fetchStockInfo
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
