import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { Stock } from '../../state/watchlist/watchlistSlice';


type StockDetailUrlParams = string

function StockDetail() {
  const stock_id = useParams<StockDetailUrlParams>()
  async function fetchStockInfo(){
    const { data } = await axios.get(`/api/stock/${stock_id.id}`)
    return data
  }
  const { data, isLoading, isError } = useQuery<Stock>({ queryKey: ['stockInfo'], queryFn: fetchStockInfo })
  if(isLoading){
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Mistake with data fetching</h3>;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  const { image_url, stock_name, stock_price, id, index, isin }: Stock = data;


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3vh', marginTop: '20vh'}}>
      <img src={image_url}
           alt={stock_name}
           style={{ width: '100px', height: '100px' }}
      />
      <h1>{stock_name}</h1>
      <h2>{stock_price}</h2>
      <div style={{display: 'flex', gap: '3vw', fontSize: '20px'}}>
        <p>Id: {id}</p>
        <p>Index: {index}</p>
        <p>ISIN: {isin}</p>
      </div>
    </div>
  )
}

export default StockDetail;
