import { MockHandler } from 'vite-plugin-mock-server';
import { getStockInfo, getStockList, getWatchList } from './mockData';

const extractSymbolFromUrl = (url) => {
  const match = url.match(/\/api\/stock\/([^\/]+)/);
  return match ? match[1] : null;
};

const mocks: MockHandler[] = [
  {
    pattern: '/api/stock/*',
    method: 'GET',
    handle: (req, res) => {
      const id = extractSymbolFromUrl(req.url);

      const stock = getStockInfo(id);
      if (stock) {
        res.end(JSON.stringify(stock));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Stock not found' }));
      }
    }
  },
  {
    pattern: '/api/stocks',
    handle: (req, res) => {
      res.end(JSON.stringify(getStockList()));
    }
  },
  {
    pattern: '/api/addToWatchList',
    method: 'POST',
    handle: (req, res) => {
      const id = req?.body?.id;
      const stock = getStockInfo(id);
      if (stock) {
        res.end(JSON.stringify(stock));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Stock not found' }));
      }
    }
  },
  {
    pattern: '/api/removeFromWatchList',
    method: 'POST',
    handle: (req, res) => {
      const id = req?.body?.id;
      const stock = getStockInfo(id);
      if (stock) {
        res.end(JSON.stringify(stock));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Stock not found' }));
      }
    }
  },
  {
    pattern: '/api/watchList',
    handle: (req, res) => {
      res.end(JSON.stringify(getWatchList()));
    }
  }
];

export default mocks;
