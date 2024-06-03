import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

function Stocks({stocks}) {
  return (
    <TableContainer sx={{ marginTop: '4vh'}}>
      <Table sx={{ '& td, & th': { fontSize: '1.5vw', padding: '1vh 4vw' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>
                <Link to={`stocks/${stock.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src={stock.image_url} 
                  alt={stock.stock_name} 
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  {stock.stock_name}
                </Link>
              </TableCell>
              <TableCell>{stock.stock_price}</TableCell>
              <TableCell>{stock.index}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Stocks