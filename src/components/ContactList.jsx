import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          onDelete={onDelete}
          id={contact.id}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
