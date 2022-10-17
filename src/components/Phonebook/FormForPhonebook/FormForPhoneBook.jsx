import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { ButtonSpiner } from 'components/Spiner/Spiner';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactCount,
} from 'redux/toolkit/contacts/selector-contacts';
import { addContact } from 'redux/toolkit/contacts/operations-contacts';

import {
  StyledForm,
  StyledField,
  StyledLabel,
  ButtonAdd,
  Counter,
} from './FormForPhoneBook.styled';

const schema = yup.object().shape({
  name: yup.string().required('Please enter first and last name'),
  number: yup
    .string()
    .min(10)
    .max(18)
    .required('Please enter the phone number in the format +380932600501'),
});

export const FormForPhoneBook = () => {
  // const [input, setInput] = useState(null);
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(selectContacts);

  const countContact = useSelector(selectContactCount);

  const handleSubmitFormik = (values, { resetForm }) => {
    console.log(values);
    const { name } = values;

    // setInput(values);
    const isDuplicate = items.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isDuplicate) {
      return Notify.warning(`${name} is already in contacts`, {
        backOverlay: true,
        timeout: 2000,
        position: 'center-top',
        fontSize: '34px',
        width: '600px',
        clickToClose: true,
      });
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitFormik}
      validationSchema={schema}
    >
      <StyledForm>
        {countContact > 0 && (
          <Counter>
            You have: {countContact}
            {countContact === 1 ? ' contact' : ' contacts'} in your phonebook
          </Counter>
        )}

        <StyledLabel>
          Name
          <StyledField
            placeholder="Name Surname"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledField
            placeholder="+380932600501"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </StyledLabel>
        <ButtonAdd type="submit" disabled={isLoading}>
          {/* {isLoading && input !== '' && <ButtonSpiner />} */}
          Add contact
        </ButtonAdd>
      </StyledForm>
    </Formik>
  );
};
