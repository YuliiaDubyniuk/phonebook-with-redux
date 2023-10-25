import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
}
