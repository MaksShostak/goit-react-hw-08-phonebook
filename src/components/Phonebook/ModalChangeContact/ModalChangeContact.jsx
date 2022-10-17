import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { changeContact } from 'redux/toolkit/contacts/operations-contacts';
import { selectItems } from 'redux/toolkit/contacts/selector-contacts';
import { IoCloseOutline } from 'react-icons/io5';

import {
  StyledLabel,
  Overlay,
  StyledInput,
  ButtonChange,
  ModalForm,
} from './ModalChangeContact.styled';

const ModalChangeContact = ({ modalIsOpen, closeModal }) => {
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

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = items.find(contact => {
      return (
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
      );
    });

    if (isDuplicate) {
      return Notify.warning(
        `${e.target.elements.name.value} is already in contacts`,
        {
          backOverlay: true,
          timeout: 2000,
          position: 'center-top',
          fontSize: '34px',
          width: '600px',
          clickToClose: true,
        }
      );
    }

    dispatch(
      changeContact({
        name: e.target.elements.name.value,
        number: e.target.elements.number.value,
        id: modalIsOpen,
      })
    );
    e.target.reset();
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
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Phone
          <StyledInput type="tel" name="number" />
        </StyledLabel>
        <ButtonChange type="submit">Push changes</ButtonChange>
      </ModalForm>
    </Overlay>
  );
};

export default ModalChangeContact;
