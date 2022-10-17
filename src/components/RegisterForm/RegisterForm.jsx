import { useState } from 'react';
import { MyButton } from './RegisterForm.styled';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { BiShow } from 'react-icons/bi';
import { register } from 'redux/toolkit/authorization/operations-auth';

function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    e.target.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
        controlId="formBasicPassword"
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

      <MyButton type="submit">Register</MyButton>
    </Form>
  );
}

export default RegisterForm;
