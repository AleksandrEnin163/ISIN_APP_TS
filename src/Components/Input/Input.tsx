import s from './Input.module.css';
import { Button } from '../../stories/Button/Button';

function Input() {
  return (
    <div className={s.input_form}>
      <input type="text" id="isin_input" name="isin-input" placeholder="Enter ISIN" />
      <Button label="Add" />
      <Button label="Add Valid ISIN" />
    </div>
  );
}

export default Input;
