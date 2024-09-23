import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul className={styles.contactList}>
                {contacts.map(({ id, name, number }) => (
                    <Contact key={id} id={id} name={name} number={number} />
                ))}
            </ul>
        </>
    );
};

export default ContactList;
