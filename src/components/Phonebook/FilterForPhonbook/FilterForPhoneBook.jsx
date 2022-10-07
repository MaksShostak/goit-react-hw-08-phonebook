import React from 'react';

import { FilterLabelStyled, StyledInput } from './FilterForPhoneBook.styled';
import { slice } from 'redux/toolkit/slice';
import { useDispatch, useSelector } from 'react-redux';
const { filterContacts } = slice.actions;
export const FilterForPhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
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
  );
};
