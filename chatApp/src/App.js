import { useState } from "react";
import { nanoid } from "nanoid";
import CONTACTS from "./CONTACTS";
import { ContactList } from "./components/ContactList";

import { Chat } from "./components/Chat";
import "./style.scss";

function App() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSubmit = (e, draftMessage) => {
    e.preventDefault();

    const newMessage = {
      id: nanoid(),
      userId: 0,
      message: draftMessage,
      timestamp: new Date().toLocaleString(),
    };

    const updatedContact = {
      ...selectedContact,
      messageHistory: [...selectedContact.messageHistory, newMessage],
    };

    const updatedContacts = contacts.map((contact) =>
      contact.id === selectedContact.id ? updatedContact : contact
    );

    setSelectedContact(updatedContact);
    setContacts(updatedContacts);
  };

  return (
    <div className="app">
      <ContactList contacts={contacts} onSelect={setSelectedContact} />
      <Chat selectedContact={selectedContact} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
