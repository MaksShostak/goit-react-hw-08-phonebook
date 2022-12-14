import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { changeContact } from 'redux/toolkit/contacts/operations-contacts';
import { selectItems } from 'redux/toolkit/contacts/selector-contacts';
import { IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

import {
  StyledLabel,
  Overlay,
  StyledInput,
  // ButtonChange,
  ModalForm,
} from './ModalChangeContact.styled';

const ModalChangeContact = ({ modalIsOpen, closeModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, modalIsOpen]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = items.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!name || !number) {
      return Notify.warning(`fill in all the fields to change`, {
        backOverlay: true,
        timeout: 2000,
        position: 'center-top',
        fontSize: '34px',
        width: '600px',
        clickToClose: true,
      });
    }
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

    dispatch(
      changeContact({
        name,
        number,
        id: modalIsOpen,
      })
    );
    setName('');
    setNumber('');
    closeModal();
  };

  const handleBackDropClose = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
  return (
    <Overlay onClick={handleBackDropClose}>
      <ModalForm onSubmit={handleSubmit}>
        <IoCloseOutline
          onClick={closeModal}
          size={30}
          stroke="crimson"
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            cursor: 'pointer',
          }}
        />

        <StyledLabel htmlFor="">
          Name
          <StyledInput
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Phone
          <StyledInput
            type="tel"
            name="number"
            placeholder="Tel"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <Button type="submit">Push changes</Button>
      </ModalForm>
    </Overlay>
  );
};

ModalChangeContact.propTypes = {
  modalIsOpen: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

export default ModalChangeContact;
