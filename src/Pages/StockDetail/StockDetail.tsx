import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Stock } from './components/Stock/Stock';
import { useStockUi } from './hooks/useStockUI';

function StockDetail() {
  //я когда раньше использовал useParams, он мне возразал значение строкой, а сейчас приходит объект
  const { data, loading, error } = useStockUi();

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
    <Stock
      imageUrl={data.imageUrl}
      name={data.name}
      price={data.price}
      id={data.id}
      indexName={data.indexName}
      isin={data.isin}
    />
  );
}

export default StockDetail;
