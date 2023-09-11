import React from 'react';
import Button from '../Elements/Button/Button';
import { Link } from 'react-router-dom';

const CardProducts = ({ children }) => {
  return <div className="w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-5 flex flex-col justify-between">{children}</div>;
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img className="p-8 rounded-t-lg h-72 w-full object-cover" src={image} alt="product" />
    </Link>
  );
};

const Body = ({ title, children, id }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">{title.substring(0, 20)}..</h5>
        <p className="text-m text-white">{children.substring(0, 120)}...</p>
      </Link>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between gap-16 px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
