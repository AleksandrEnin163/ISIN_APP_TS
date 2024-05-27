import { Button } from '../../stories/Button/Button';
import s from './Table.module.css';

function Table() {
  return (
    <div className={s.table_container}>
      <h2>Subscribed ISINS</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.tr_isin}>
            <td>USD111111</td>
            <td>123456789</td>
            <td>
              <Button size="large" label="Unsubscribe" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
