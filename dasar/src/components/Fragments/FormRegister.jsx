import React from 'react';
import Button from '../Elements/Button/Button';
import FormInput from '../Elements/Input/FormInput';

const FormRegister = () => {
  return (
    <>
      <form action="">
        <FormInput label="Name" name="name" type="text" placeholder="Your full name" />
        <FormInput label="Email" name="email" type="email" placeholder="example@mail.com" />
        <FormInput label="Password" name="password" type="password" placeholder="******" />
        <FormInput label="Confirm Password" name="confirmPassword" type="password" placeholder="******" />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
