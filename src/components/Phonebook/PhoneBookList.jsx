import React, { useState } from 'react';
import { ButtonSpiner } from 'components/Spiner/Spiner';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  // changeContact
} from 'redux/toolkit/operations';

import {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
} from 'redux/toolkit/selector';
import ModalChangeContact from './ModalChangeContact/ModalChangeContact';
import {
  ButtonDel,
  ButtonEdit,
  PhoneItem,
  // Overlay,
  // ModalForm,
  // StyledLabel,
  // StyledInput,
  // ButtonChange,
} from './PhoneBookList.styled';

import { slice } from 'redux/toolkit/slice';
const { filterContacts } = slice.actions;

export const PhonebookList = () => {
  const [modalIsOpen, setModalIsOpen] = useState('');

  const filter = useSelector(selectFilter);

  const { items, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  let filteredContact = null;
  const handleDelete = id => {
    filteredContact = items.filter(contact => contact.id !== id);
    selectFilteredContacts(filteredContact).length
      ? dispatch(filterContacts(filter))
      : dispatch(filterContacts(''));
    dispatch(deleteContact(id));
  };

  // const getFilteredContact = filteredContacts => {
  //   const normalaizedFilter = filter.toLowerCase();

  //   const active = filteredContacts ? filteredContacts : items;

  //   return active.filter(contact => {
  //     return (
  //       contact.name.toLowerCase().includes(normalaizedFilter) ||
  //       contact.phone.includes(filter)
  //     );
  //   });
  // };
  const filteredContacts = useSelector(selectFilteredContacts());

  // const filtered = getFilteredContact();

  const handleModalOpen = ({ target: { id } }) => {
    setModalIsOpen(id);
  };
  return (
    <ul>
      {filteredContacts?.map(({ id, name, phone }) => {
        return (
          <PhoneItem key={id}>
            <p>
              {name}: {phone}
            </p>
            <ButtonDel
              type="submit"
              onClick={() => {
                handleDelete(id);
              }}
              disabled={isLoading}
            >
              {isLoading && <ButtonSpiner />}
              Delete
            </ButtonDel>
            {!modalIsOpen && (
              <ButtonEdit id={id} onClick={handleModalOpen}>
                Edit
              </ButtonEdit>
            )}
            {
              modalIsOpen === id && (
                <ModalChangeContact
                  modalIsOpen={modalIsOpen}
                  closeModal={() => {
                    setModalIsOpen('');
                  }}
                />
              )
              // (
              //   <Overlay onClick={handleBackDropClose}>
              //     <ModalForm
              //       onSubmit={e => {
              //         e.preventDefault();
              //         dispatch(
              //           changeContact({
              //             name: e.target.elements.name.value,
              //             phone: e.target.elements.phone.value,
              //             id: modalIsOpen,
              //           })
              //         );
              //         e.target.reset();
              //         setModalIsOpen(false);
              //       }}
              //     >
              //       <StyledLabel htmlFor="">
              //         Name
              //         <StyledInput type="text" name="name" />
              //       </StyledLabel>
              //       <StyledLabel htmlFor="">
              //         Phone
              //         <StyledInput type="text" name="phone" />
              //       </StyledLabel>
              //       <ButtonChange type="submit">push changes</ButtonChange>
              //     </ModalForm>
              //   </Overlay>
              // )
            }
          </PhoneItem>
        );
      })}
    </ul>
  );
};
