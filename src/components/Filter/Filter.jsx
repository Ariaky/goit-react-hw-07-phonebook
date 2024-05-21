import { setFilter } from "redux/filterSlice";
import { selectFilterValue } from '../../redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);
  
    const handleChange = e => {
      dispatch(setFilter(e.currentTarget.value));
    };
  
    return (
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    );
  };