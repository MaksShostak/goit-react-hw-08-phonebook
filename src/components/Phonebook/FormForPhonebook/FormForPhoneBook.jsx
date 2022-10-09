import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonAdd } from './FormForPhoneBook.styled';
// import Spiner from 'components/Spiner/Spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledForm,
  StyledField,
  StyledLabel,
} from './FormForPhoneBook.styled';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/toolkit/operations';

const schema = yup.object().shape({
  name: yup.string().required('Please enter first and last name'),
  phone: yup
    .string()
    .min(10)
    .max(18)
    .required('Please enter the phone number in the format +380932600501'),
});

export const FormForPhoneBook = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.contacts);

  const handleSubmitFormik = (values, { resetForm }) => {
    const { name } = values;
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
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmitFormik}
      validationSchema={schema}
    >
      <StyledForm>
        {items.length > 0 && (
          <p>
            You have: {items.length}
            {items.length === 1 ? ' contact' : ' contacts'} in your phonebook
          </p>
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" component="div" />
        </StyledLabel>
        <ButtonAdd type="submit" disabled={isLoading}>
          Add contact
        </ButtonAdd>
      </StyledForm>
    </Formik>
  );
};
