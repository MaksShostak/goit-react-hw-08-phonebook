import React from 'react';
import { selectFilter } from 'redux/toolkit/contacts/selector-contacts';
import {
  FilterLabelStyled,
  StyledInput,
  Container,
} from './FilterForPhoneBook.styled';
import { filterContacts } from 'redux/toolkit/contacts/slice-contacts';
import { useDispatch, useSelector } from 'react-redux';

export const FilterForPhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Container>
      <FilterLabelStyled>
        Find contacts by name
        <StyledInput
          type="text"
          value={filter}
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </FilterLabelStyled>
    </Container>
  );
};
