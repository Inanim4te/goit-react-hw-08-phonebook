import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact(name, number);
    setName('');
    setNumber('');
  };

  const createContact = (name, number) => {
    if (!contacts.find(el => el.name === name)) {
      const newContact = {
        name,
        number,
      };
      dispatch(addContact(newContact));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  return (
    <div className={css.wrap}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            className={css.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
