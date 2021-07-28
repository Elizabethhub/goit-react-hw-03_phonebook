import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactFormStyled } from "./ContactFormStyled";

class ContactForm extends Component {
  state = { name: "", number: "" };

  handleInputChange = (event) => {
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    const sameContact = this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (sameContact) {
      return alert(`${this.state.name} is already exists in the Phonebook`);
    }

    this.props.addContact(contact);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <ContactFormStyled>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              className="inputName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
            <input
              type="tel"
              name="number"
              className="inputName"
              value={this.state.number}
              onChange={this.handleInputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className="btnAdd">
            Add contact
          </button>
        </form>
      </ContactFormStyled>
    );
  }
}

export default ContactForm;
