import { Contact } from "./Contact";
import "./ContactList.scss";

export const ContactList = ({ contacts, onSelect }) => (
  <div className="contact-list">
    <h2>Messages</h2>
    {contacts.map((contact) => (
      <Contact
        onSelect={() => onSelect(contact)}
        key={contact.id}
        {...contact}
      />
    ))}
  </div>
);
