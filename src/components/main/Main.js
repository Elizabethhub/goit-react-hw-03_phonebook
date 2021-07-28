import React, { Component } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import Section from "../section/Section";

class Main extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleInputChange = (event) => {
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  onDeleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("cntList updated");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} contacts={contacts} />
        </Section>
        <Filter handleInputChange={this.handleInputChange} />
        <Section title="Contacts">
          <ContactList contacts={contacts} filter={filter} onDeleteContact={this.onDeleteContact} />
        </Section>
      </>
    );
  }
}

export default Main;
