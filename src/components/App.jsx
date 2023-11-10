import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div
      style={{
        width: '400px',
        margin: '1rem',
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
