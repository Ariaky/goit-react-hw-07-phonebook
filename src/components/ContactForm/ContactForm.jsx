import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { selectItems } from '../../redux/selectors'

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const [formData, setFormData] = useState({ name: '', number: '' });
  const nameId = nanoid();
  const tagId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim() || contact.number === number.trim()
    );
    if (contactExists) {
      toast.warn(`${contactExists ? formData[contactExists] : name} is already in your contacts`, {
        position: 'top-right',
        theme: 'colored',
      });
    } else {
      dispatch(addContact({ ...formData, id: nanoid() }));
      toast.success(`New contact "${name}" has been added successfully`, {
        position: 'top-right',
        theme: 'colored',
      });
      setFormData({ name: '', number: '' });
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
    <label className={css.label} htmlFor={nameId}>
      Name
      <input
        className={css.input}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
        placeholder='John Doe'
      />
    </label>
    <label className={css.label} htmlFor={tagId}>
      Number
      <input
        className={css.input}
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        pattern={"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}
        placeholder='XXX-XX-XX'
      />
    </label>
    <button className={css.button} type="submit">
      Add contact
    </button>
  </form>
  );
};