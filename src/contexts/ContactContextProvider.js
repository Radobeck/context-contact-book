import axios from 'axios';
import React from 'react';
import { createContext } from 'react';

export const contactContext = createContext();

const API = 'http://localhost:8000/contacts';

const ContactContextProvider = ({ children }) => {
  //! add (create)

  async function addContact(newContact) {
    await axios.post(API, newContact);
  }

  return (
    <contactContext.Provider value={{ addContact }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
