import React from 'react';
import { Mybutton } from './Button.styled';

const Button = ({ children, title, onClick, type, disabled, id }) => {
  return (
    <Mybutton onClick={onClick} type={type} disabled={disabled} id={id}>
      {title || children}
    </Mybutton>
  );
};

export default Button;
