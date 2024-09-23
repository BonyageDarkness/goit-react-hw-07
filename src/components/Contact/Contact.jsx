import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={styles.contact}>
            <div className={styles['contact-info']}>
                <FaUserAlt className={styles['contact-icon']} />
                <p>{name}</p>
            </div>
            <div className={styles['contact-number-wrapper']}>
                <FaPhoneAlt className={styles['contact-icon']} />
                <p className={styles['contact-number']}>{number}</p>
            </div>
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;
