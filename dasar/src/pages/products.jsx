import React, { Fragment, useEffect, useRef, useState } from 'react';
import CardProducts from '../components/Fragments/CardProducts';
import Button from '../components/Elements/Button/Button';
import { getProduct } from '../services/product';
import useLogin from '../hooks/useLogin';

const ProductPages = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const totalRef = useRef(null);

  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    if (cart.length > 0) {
      totalRef.current.style.display = 'table-row';
    } else {
      totalRef.current.style.display = 'none';
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('password');
    window.location.href = '/login';
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end items-center gap-8 px-20 w-full bg-slate-500 text-white font-medium py-2">
        {username}
        <Button classname="bg-red-500" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-y-10">
          {products.length > 0 &&
            products.map((data) => (
              <CardProducts key={data.id}>
                <CardProducts.Header image={data.image} id={data.id} />
                <CardProducts.Body title={data.title}>{data.description}</CardProducts.Body>
                <CardProducts.Footer price={data.price} handleAddToCart={handleAddToCart} id={data.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-1/4">
          <div className="text-2xl font-bold text-blue-600 ml-5 mb-2">Cart</div>

          <table className="text-left table-auto border-separate border-spacing-x-5 text-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                      <td>{item.qty}</td>
                      <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    </tr>
                  );
                })}
              <tr className="font-bold" ref={totalRef}>
                <td colSpan={3} className="text-right">
                  Total Payment :
                </td>
                <td>{total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPages;
