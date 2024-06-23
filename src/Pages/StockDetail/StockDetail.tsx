import { StockItem } from './components/StockItem/StockItem'
import { useStockUi } from './hooks/useStockUI';



function StockDetail() {
  const { data, loading, error } = useStockUi()
  if(loading){
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>Mistake with data fetching</h3>;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <StockItem
      imageUrl = {data.imageUrl}
      name = {data.name}
      price = {data.price}
      id = {data.id}
      indexName = {data.indexName}
      isin = {data.isin}
    />
  )
}

export default StockDetail;
