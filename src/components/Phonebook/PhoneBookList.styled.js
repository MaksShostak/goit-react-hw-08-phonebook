import styled from 'styled-components';

export const ButtonDel = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]}px;
  width: 200px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: all 300ms ease-in-out;
  /* margin-top: ${({ theme }) => theme.space[5]}px; */
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.12);
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
  }
`;
export const ButtonEdit = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]}px;
  width: 200px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: all 300ms ease-in-out;
  /* margin-top: ${({ theme }) => theme.space[5]}px; */
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.12);
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
  }
`;
export const PhoneItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  gap: ${({ theme }) => theme.space[3]}px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalForm = styled.form`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: ${({ theme }) => theme.colors.bglite};
  padding: ${({ theme }) => theme.space[6]}px;
`;

export const ButtonChange = styled.button`
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

export const StyledInput = styled.input`
  border: 4px solid;
  display: block;
  height: 40px;
  width: 400px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding-left: ${({ theme }) => theme.space[4]}px;
  transition: all 300ms ease-in-out;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  &:hover,
  :focus,
  :active {
    border: 4px solid;
    border-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
  }
`;
export const StyledLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
`;
