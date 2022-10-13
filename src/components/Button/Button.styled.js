import styled from 'styled-components';

export const Mybutton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]}px;
  width: 250px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: all 300ms ease-in-out;
  margin-top: ${({ theme }) => theme.space[5]}px;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.12);
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
  }
`;
