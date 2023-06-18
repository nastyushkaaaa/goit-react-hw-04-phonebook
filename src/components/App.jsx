import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  function formSubmitHandler({ name, number }) {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      !contacts.some(existingContact => existingContact.name === contact.name)
    ) {
      setContacts(prevState => [contact, ...prevState]);
    } else {
      alert(contact.name + ' is already in contacts!');
    }
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <Form onSubmit={formSubmitHandler}></Form>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactList
        list={visibleContacts}
        onDeleteContact={deleteContact}
      ></ContactList>
    </div>
  );
}
