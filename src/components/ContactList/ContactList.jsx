import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}{' '}
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts);
 
  const searchContacts = useSelector(state => state.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase().trim())
  );

  return (
    <>
      <h2>Contacts</h2>
      <ul className={styles.contactList}>
        {filterContacts.map(contact => (

          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};



// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts);
//   const searchContacts = useSelector(state => state.filter);

//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(searchContacts.toLowerCase().trim())
//   );

//   return (
//     <>
//       <h2>Contacts</h2>
//       <ul className={styles.contactList}>
//         {filterContacts.map(contact => (

//           <ContactItem key={contact.id} contact={contact} />
//         ))}
//       </ul>
//     </>
//   );
// };
