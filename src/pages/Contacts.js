import { ContactForm } from 'components/ContactForm /ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // width: '500px',
        // marginTop: '50px',
        // backgroundColor: '#b4d6f5',
        // borderRadius: '8px',
        // padding: '40px 20px',
        // outline: 'auto #291578',
        // outlineOffset: '-10px',
      }}
    >
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  );
}
