import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <section className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>

      <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      />
    </>
  );
};