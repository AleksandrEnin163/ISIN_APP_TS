import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList, WatchlistState } from '../../../../state/watchlist/watchlistSlice'

type Stocks = {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  indexName: string;
  isin: string;
}

type StocksProps = {
  stocks: Stocks[]
}

export const Stocks = ({ stocks }: StocksProps) => {

  const watchlist = useSelector((state: { watchlist: WatchlistState }) => state.watchlist); // я попробывал написать через Generic но тогда типы не передавались. Гугл мне здесь не сильно подасказал, почему не работает.
  const dispatch = useDispatch()

  return (
    <TableContainer sx={{ marginTop: '4vh'}}>
      <Table sx={{ '& td, & th': { fontSize: '1.5vw', padding: '1vh 4vw' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Index</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks?.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>
                <Link to={`stocks/${stock.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src={stock.imageUrl} 
                  alt={stock.name} 
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  {stock.name}
                </Link>
              </TableCell>
              <TableCell>{stock.price}</TableCell>
              <TableCell>{stock.indexName}</TableCell>
              <TableCell>
              {watchlist.some(item => item.id === stock.id) ? (
                <Button variant='outlined' onClick={() => dispatch(removeFromWatchList(stock))}>Удалить из WatchList</Button>
              ) : (
                <Button variant='contained' onClick={() => dispatch(addToWatchList(stock))}>Добавить в WatchList</Button>
              )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Stocks