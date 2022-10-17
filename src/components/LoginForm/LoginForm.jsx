import { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { login } from 'redux/toolkit/authorization/operations-auth';

import { MyButton } from './LoginForm.styled';

function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    e.target.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="LoginFormBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="loginoFormBasicPassword"
        style={{ position: 'relative' }}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <BiShow
          onClick={togglePassword}
          style={{ position: 'absolute', top: '44', right: '5' }}
        />
      </Form.Group>

      <MyButton type="submit">Login</MyButton>
    </Form>
  );
}

export default LoginForm;
