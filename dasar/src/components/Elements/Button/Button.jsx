import React from 'react';

const Button = (props) => {
  const { type, classname = 'bg-black', children, onClick = () => {} } = props;
  return (
    <>
      <button type={type} className={`px-5 h-10 ${classname} font-semibold text-white rounded `} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
