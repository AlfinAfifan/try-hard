import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder } = props;
  return (
    <>
      <input type={type} name={name} id={name} className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50" placeholder={placeholder} ref={ref} />
    </>
  );
});

export default Input;
