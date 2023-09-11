import React, { Fragment, useEffect, useRef, useState } from 'react';
import Button from '../Elements/Button/Button';
import FormInput from '../Elements/Input/FormInput';
import { login } from '../../services/auth';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // API
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });

    // Local Storage
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = '/products';
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Fragment>
      <form onSubmit={handleLogin}>
        {loginFailed && <p className="w-full py-1 text-center text-white bg-red-400 rounded normal-case text-sm mb-2">{loginFailed}</p>}
        <FormInput label="Username" name="username" type="text" placeholder="example@mail.com" ref={inputRef} />
        <FormInput label="Password" name="password" type="password" placeholder="******" />
        <Button type="submit" classname="bg-blue-600 w-full">
          Login
        </Button>
      </form>
    </Fragment>
  );
};

export default FormLogin;
