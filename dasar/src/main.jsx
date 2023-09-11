import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import NotFound from './pages/notFound';
import ProductPage from './pages/products';
import DetailProductPage from './pages/detailProduct';

const router = createBrowserRouter([
  { path: '/', element: <div>Awal</div>, errorElement: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/products', element: <ProductPage /> },
  { path: '/product/:id', element: <DetailProductPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
