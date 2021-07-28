import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ol>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => (
          <ContactListItem key={contact.id} {...contact} onDeleteContact={onDeleteContact} />
        ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
