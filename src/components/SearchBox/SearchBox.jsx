import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.searchBox}>
            <label>
                Find contacts by name
                <input type="text" value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};

export default SearchBox;
