import React, { useState, useEffect } from 'react';
// import { ButtonSpiner } from 'components/Spiner/Spiner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/toolkit/contacts/operations-contacts';
import Button from 'components/Button/Button';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/toolkit/contacts/selector-contacts';
import ModalChangeContact from '../ModalChangeContact/ModalChangeContact';
import {
  // ButtonDel,
  // ButtonEdit,
  PhoneItem,
  ItemContainer,
  Text,
  List,
} from './PhoneBookList.styled';

import { filterContacts } from 'redux/toolkit/contacts/slice-contacts';

export const PhonebookList = () => {
  const [modalIsOpen, setModalIsOpen] = useState('');
  const filteredContacts = useSelector(selectFilteredContacts);
  const { isLoading, items } = useSelector(selectContacts);
  console.log(filteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    filteredContacts.length === 0 && dispatch(filterContacts(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleModalOpen = ({ target: { id } }) => {
    setModalIsOpen(id);
  };
  return (
    <>
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts?.map(({ id, name, number }) => {
            return (
              <PhoneItem key={id}>
                <Text>
                  {name}: {number}
                </Text>
                <ItemContainer>
                  <Button
                    type="button"
                    onClick={() => {
                      handleDelete(id);
                    }}
                    disabled={isLoading}
                  >
                    {/* {isLoading && <ButtonSpiner />} */}
                    Delete
                  </Button>
                  {!modalIsOpen && (
                    <Button type="button" id={id} onClick={handleModalOpen}>
                      Edit
                    </Button>
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
      )}
    </>
  );
};
