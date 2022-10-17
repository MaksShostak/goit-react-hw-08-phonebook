import styled from 'styled-components';

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[6]}px;
  border-radius: 4px;
`;

export const ButtonChange = styled.button`
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
export const StyledLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export const ButtonX = styled.button`
  padding: ${({ theme }) => theme.space[0]}px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 300ms ease-in-out;
  &:hover,
  :focus {
    /* color: ${({ theme }) => theme.colors.white}; */
    /* background-color: ${({ theme }) => theme.colors.mycolor}; */
    transform: scale(1.18);
    /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}; */
  }
`;
