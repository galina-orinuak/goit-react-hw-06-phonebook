import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContact } from 'components/redux/ContactsSlice';

export const ContactItem = ({ contact, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}{' '}
      <button className={styles.deleteBtn} onClick={() => dispatch(deleteContact(contact.id))}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export const ContactList = () => {
const contacts = useSelector(state => state.contacts)

  return (
    <>
      <h2>Contacts</h2>
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
