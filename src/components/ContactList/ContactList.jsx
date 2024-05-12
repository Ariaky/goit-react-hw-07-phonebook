import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectContact } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  return (
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
  )
}