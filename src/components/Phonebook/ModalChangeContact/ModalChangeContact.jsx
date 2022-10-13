import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeContact } from 'redux/toolkit/operations';
import {
  StyledLabel,
  Overlay,
  StyledInput,
  ButtonChange,
  ModalForm,
} from './ModalChangeContact.styled';

const ModalChangeContact = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
        console.log(modalIsOpen);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'none';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, modalIsOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      changeContact({
        name: e.target.elements.name.value,
        phone: e.target.elements.phone.value,
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
        <StyledLabel htmlFor="">
          Name
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Phone
          <StyledInput type="text" name="phone" />
        </StyledLabel>
        <ButtonChange type="submit">push changes</ButtonChange>
      </ModalForm>
    </Overlay>
  );
};

export default ModalChangeContact;
