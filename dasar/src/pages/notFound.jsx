import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-xl font-semibold text-red-500">{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
