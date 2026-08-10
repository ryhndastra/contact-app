import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id,
    );
    this.setState({ contacts: filteredContacts });
  };

  onAddContactHandler = ({ name, tag }) => {
    this.setState((prev) => {
      return {
        contacts: [
          ...prev.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "images/default.jpeg",
          },
        ],
      };
    });
  };

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
