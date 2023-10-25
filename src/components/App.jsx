import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { SearchField } from './SearchField/SearchField';

export const App = () => (
    <div>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <SearchField/>
      <Contacts/>
    </div>
  )
