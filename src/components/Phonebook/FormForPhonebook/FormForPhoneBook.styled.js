import styled from 'styled-components';
import { Form, Field } from 'formik';

// export const ButtonAdd = styled.button`
//   font-size: ${({ theme }) => theme.fontSizes.s};
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: ${({ theme }) => theme.space[3]}px;
//   width: 120px;
//   height: 40px;
//   border-radius: ${({ theme }) => theme.radii.md};
//   color: ${({ theme }) => theme.colors.black};
//   box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
//   background-color: ${({ theme }) => theme.colors.white};
//   /* transition: all 300ms ease-in-out; */
//   /* margin-top: ${({ theme }) => theme.space[5]}px; */

//   box-shadow: inset 0 0 0 0 crimson;

//   transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   &:hover,
//   :focus {
//     color: ${({ theme }) => theme.colors.white};
//     /* background-color: ${({ theme }) => theme.colors.mycolor}; */
//     /* transform: scale(1.12); */
//     /* box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}; */

//     box-shadow: inset 200px 0 0 0 crimson;
//   }
// `;
export const StyledForm = styled(Form)`
  padding: ${({ theme }) => theme.space[5]}px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;
export const StyledField = styled(Field)`
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
export const Counter = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`;
