import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

import { setFilter } from 'redux/filter/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
