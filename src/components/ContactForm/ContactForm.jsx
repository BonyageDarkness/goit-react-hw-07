import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOperations';
import { selectContacts } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    number: Yup.string()
        .min(7, 'Must be at least 7 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        // Проверка на дубликаты
        const isDuplicate = contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase(),
        );

        if (isDuplicate) {
            alert(`${name} is already in contacts.`);
            return;
        }

        dispatch(addContact({ name, number }));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Number
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
