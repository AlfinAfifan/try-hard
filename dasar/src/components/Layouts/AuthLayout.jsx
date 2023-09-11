import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details!</p>
        {children}
        <Navigate type={type} />
      </div>
    </div>
  );
};

const Navigate = ({ type }) => {
  if (type === 'login') {
    return (
      <p className="text-sm mt-2 text-center">
        Don't have an account?{' '}
        <Link className="font-semibold text-blue-600" to="/register">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-2 text-center">
        Already have an account?{' '}
        <Link className="font-semibold text-blue-600" to="/login">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
