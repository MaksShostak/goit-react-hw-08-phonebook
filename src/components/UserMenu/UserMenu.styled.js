import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;
`;
export const ButtonLoguot = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding: 0 10px 4px 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.mycolor};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease-in-out;
  /* margin-top: ${({ theme }) => theme.space[5]}px; */
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.05);
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.black};
  }
`;
export const WelcomeName = styled.p`
  font-weight: 700;
`;
