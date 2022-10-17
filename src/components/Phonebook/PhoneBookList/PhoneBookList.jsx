import React, { useState, useEffect } from 'react';
// import { ButtonSpiner } from 'components/Spiner/Spiner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/toolkit/contacts/operations-contacts';

import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/toolkit/contacts/selector-contacts';
import ModalChangeContact from '../ModalChangeContact/ModalChangeContact';
import {
  ButtonDel,
  ButtonEdit,
  PhoneItem,
  ItemContainer,
  Text,
  List,
} from './PhoneBookList.styled';

import { filterContacts } from 'redux/toolkit/contacts/slice-contacts';

export const PhonebookList = () => {
  const [modalIsOpen, setModalIsOpen] = useState('');
  const filteredContacts = useSelector(selectFilteredContacts);
  const { isLoading } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    filteredContacts.length === 0 && dispatch(filterContacts(''));
  }, [filteredContacts, dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleModalOpen = ({ target: { id } }) => {
    setModalIsOpen(id);
  };
  return (
    <List>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <PhoneItem key={id}>
            <Text>
              {name}: {number}
            </Text>
            <ItemContainer>
              <ButtonDel
                type="submit"
                onClick={() => {
                  handleDelete(id);
                }}
                disabled={isLoading}
              >
                {/* {isLoading && <ButtonSpiner />} */}
                Delete
              </ButtonDel>
              {!modalIsOpen && (
                <ButtonEdit id={id} onClick={handleModalOpen}>
                  Edit
                </ButtonEdit>
              )}
            </ItemContainer>
            {modalIsOpen === id && (
              <ModalChangeContact
                modalIsOpen={modalIsOpen}
                closeModal={() => {
                  setModalIsOpen('');
                }}
              />
            )}
          </PhoneItem>
        );
      })}
    </List>
  );
};
