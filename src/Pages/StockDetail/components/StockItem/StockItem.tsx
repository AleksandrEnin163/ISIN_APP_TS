type Props = {
  imageUrl: string;
  name: string;
  price: string;
  id: string;
  indexName: string;
  isin: string;
};

export const StockItem = ({ imageUrl, name, price, id, indexName, isin }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3vh',
        marginTop: '20vh'
      }}>
      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <h1>{name}</h1>
      <h2>{price}</h2>
      <div style={{ display: 'flex', gap: '3vw', fontSize: '20px' }}>
        <p>Id: {id}</p>
        <p>Index: {indexName}</p>
        <p>ISIN: {isin}</p>
      </div>
    </div>
  );
};
