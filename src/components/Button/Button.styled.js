import styled from 'styled-components';

export const Mybutton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]}px;
  width: 120px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 0 0 0 crimson;

  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 200px 0 0 0 crimson;
  }
`;
