import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';




function StockDetail() {
  const id = useParams().id //я когда раньше использовал useParams, он мне возразал значение строкой, а сейчас приходит объект
  async function fetchStockInfo(){
    const { data } = await axios.get(`/api/stock/${id}`)
    return data
  }
  const { data, isLoading, isError } = useQuery({ queryKey: ['stockInfo'], queryFn: fetchStockInfo })
  console.log(data)
  if(isLoading){
    return <h3>Loading...</h3>
  }

  if(isError){
    return <h3>Mistake with data fetching</h3>
  }

  if(!data){
    return <h3>No data</h3>
  }


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3vh', marginTop: '20vh'}}>
      <img src={data.image_url} 
           alt={data.stock_name} 
           style={{ width: '100px', height: '100px' }} 
      />
      <h1>{data.stock_name}</h1>
      <h2>{data.stock_price}</h2>
      <div style={{display: 'flex', gap: '3vw', fontSize: '20px'}}>
        <p>Id: {data.id}</p>
        <p>Index: {data.index}</p>
        <p>ISIN: {data.isin}</p>
      </div>
    </div>
  )
}

export default StockDetail