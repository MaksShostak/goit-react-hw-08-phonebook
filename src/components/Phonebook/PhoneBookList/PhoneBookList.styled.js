import styled from 'styled-components';

export const ButtonDel = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-left: auto;
  margin-right: auto;

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
  /* transition: all 300ms ease-in-out; */
  /* margin-top: ${({ theme }) => theme.space[5]}px; */

  box-shadow: inset 0 0 0 0 crimson;

  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    /* background-color: ${({ theme }) => theme.colors.mycolor}; */
    /* transform: scale(1.12); */
    /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}; */

    box-shadow: inset 200px 0 0 0 crimson;
  }
`;
export const ButtonEdit = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-left: auto;
  margin-right: auto;

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
  /* transition: all 300ms ease-in-out; */
  /* margin-top: ${({ theme }) => theme.space[5]}px; */

  box-shadow: inset 0 0 0 0 crimson;

  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    /* background-color: ${({ theme }) => theme.colors.mycolor}; */
    /* transform: scale(1.12); */
    /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}; */

    box-shadow: inset 200px 0 0 0 crimson;
  }
`;
export const PhoneItem = styled.li`
  border-bottom: 1px solid gray;
  box-shadow: 0px 1px 0px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  gap: ${({ theme }) => theme.space[3]}px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: ${({ theme }) => theme.space[4]}px;
`;
export const Text = styled.p`
  padding: ${({ theme }) => theme.space[3]}px;
  font-weight: 500;
`;
export const List = styled.ul`
  padding: ${({ theme }) => theme.space[5]}px;
  padding-top: 0;
`;
