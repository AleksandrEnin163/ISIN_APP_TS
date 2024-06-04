import { test, expect } from 'playwright/test';

test('Проверка нав меню', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Stock'}).click()
  const urlHome = await page.url()
  expect(urlHome).toBe('http://localhost:3000/')

  await page.getByRole('link', { name: 'WatchList'}).click()
  const urlWatchList = await page.url()
  expect(urlWatchList).toBe('http://localhost:3000/watchlist')
});

test('Верификация таблички с акциями', async ({ page }) => {
  await page.goto('/');

  const table = await page.locator('table');

  const tableHeaders = await table.locator('thead th');
  expect(await tableHeaders.count()).toBe(3);
  expect(await tableHeaders.nth(0).textContent()).toBe('Name');
  expect(await tableHeaders.nth(1).textContent()).toBe('Price');
  expect(await tableHeaders.nth(2).textContent()).toBe('Index');

  const stockRows = await table.locator('tbody tr');
  expect(await stockRows.count()).toBe(10);

  const firstStockCells = await stockRows.nth(0).locator('td');
  expect(await firstStockCells.count()).toBe(3);

  const firstStockImage = await firstStockCells.nth(0).locator('img');
  expect(await firstStockImage.getAttribute('src')).toBe('https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg');

  const firstStockName = await firstStockCells.nth(0).textContent();
  expect(firstStockName).toBe('Microsoft');
  
  const firstStockPrice = await firstStockCells.nth(1).textContent();
  expect(firstStockPrice).toBe('$335.00');

  const firstStockIndex = await firstStockCells.nth(2).textContent();
  expect(firstStockIndex).toBe('NASDAQ');
})
