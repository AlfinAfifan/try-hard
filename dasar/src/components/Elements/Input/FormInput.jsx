import React, { forwardRef } from 'react';
import Label from './Label';
import Input from './Input';

const FormInput = forwardRef(({ label, name, type, placeholder }, ref) => {
  // const { label, name, type, placeholder } = props;
  return (
    <>
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} ref={ref} />
      </div>
    </>
  );
});

export default FormInput;
