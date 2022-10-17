import styled from 'styled-components';

export const FilterLabelStyled = styled.label`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const StyledInput = styled.input`
  border: 2px solid;
  display: block;
  height: 40px;
  width: 400px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-radius: ${({ theme }) => theme.radii.md};
  padding-left: ${({ theme }) => theme.space[4]}px;
  transition: all 300ms ease-in-out;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.mycolor};
  &:hover,
  :focus,
  :active,
  :focus-visible {
    border: 2px solid;
    /* border-color: ${({ theme }) => theme.colors.mycolor}; */
    /* transform: scale(1.01); */
    /* background-color: hwb(349 81% 5% / 0.762); */
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.black};
    outline: none;
  }
`;
export const Container = styled.div`
  padding: ${({ theme }) => theme.space[5]}px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;
