import { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./Components/ContatctForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Container from "./Components/Container";
import Section from "./Components/Section";

import "./styles.scss";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", defaultContacts);
  const [filter, setFilter] = useState("");

  const onAddContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const contactExists = contacts.find((contact) => contact.name === name);

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts((contacts) => [contact, ...contacts]);
  };

  const onFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = (contactId) => {
    const contactsAfterDelete = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(contactsAfterDelete);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <div className="wrapper">
        <Section title="Add contact">
          <ContactForm onAddContact={onAddContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={onFilter} />
          <ContactList
            contacts={filteredContacts()}
            onDeleteContact={onDeleteContact}
          />
        </Section>
      </div>
    </Container>
  );
};

export default App;
