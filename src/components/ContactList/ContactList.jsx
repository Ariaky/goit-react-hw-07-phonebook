import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { selectContact, selectFetchContacts, selectError } from '../../redux/selectors';

import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectFetchContacts);
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(`Sorry, error is occurred`, {
        position: 'top-right',
        theme: 'colored',
      });
    }
  }, [error]);

  return (
    <>
      {isLoading && !error && <Loader />}
        <ul className={css.wrapper}>
        {contacts.map(({ id, name, phone }) => (   
            <li className={css.contact} key={id}>
            {name}: {phone}{' '}
            <button className={css.button} type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
            </li> 
            )
        )}
        </ul>
    </>
  )
}