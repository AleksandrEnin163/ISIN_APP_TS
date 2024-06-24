import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList, WatchlistState } from '../../state/watchlist/watchlistSlice.js'

function WatchList() {

  const watchlist = useSelector((state: { watchlist: WatchlistState }) => state.watchlist);
  const dispatch = useDispatch()

  return (
    <TableContainer sx={{ marginTop: '4vh'}}>
      {watchlist.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>Нет сохраненных акций</h1>
      ) : (
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
          {watchlist.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>
                <Link to={`/watchlist/stocks/${stock.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src={stock.image_url} 
                  alt={stock.stock_name} 
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  {stock.stock_name}
                </Link>
              </TableCell>
              <TableCell>{stock.stock_price}</TableCell>
              <TableCell>{stock.index}</TableCell>
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
      )}
    </TableContainer>
  );
}

export default WatchList