import { useState } from 'react';
import PropTypes from 'prop-types';

export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '40px',
        gap: '15px',
        width: '250px',
      }}
    >
      <h2
        style={{
          margin: '0px',
        }}
      >
        Phonebook
      </h2>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '20px',
        }}
      >
        Name :
        <input
          style={{
            width: '250px',
            height: '20px',
          }}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '20px',
        }}
      >
        Number :
        <input
          style={{
            width: '250px',
            height: '20px',
          }}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        style={{
          width: '120px',
          height: '40px',
          margin: 'auto',
          marginTop: '10px',
          backgroundColor: '#00BFFF',
          border: '1px solid #00BFFF',
          borderRadius: '4px',
          color: '#fff',
          fontSize: '16px',
        }}
      >
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
