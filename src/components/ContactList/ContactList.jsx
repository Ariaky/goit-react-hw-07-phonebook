import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectContact, selectFetchContacts, selectError } from '../../redux/selectors';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectFetchContacts);

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