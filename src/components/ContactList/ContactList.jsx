import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectContact, selectFetchContacts, selectError } from '../../redux/selectors';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectFetchContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
        <ul className={css.wrapper}>
        {contacts.map(({ id, name, number }) => (   
            <li className={css.contact} key={id}>
            {name}: {number}{' '}
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