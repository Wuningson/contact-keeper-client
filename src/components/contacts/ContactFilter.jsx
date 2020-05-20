import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);

  const text = useRef('');

  const handleChange = (e) => {
    if (text.current.value !== '') filterContacts(e.target.value);
    else clearFilter();
  };

  useEffect(() => {
    if (!filtered) text.current.value = '';
  });

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
