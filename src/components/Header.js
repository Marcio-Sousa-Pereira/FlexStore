import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import HeaderStyle from './style';

export default function Header() {
  const amountInCart = useSelector(state => state.addToCart);
  return (
    <HeaderStyle>
      <Link to="/cart">
      <div>
        <p>Meu carrinho</p>
        <p>({amountInCart.length}) itens</p>
      </div>
      <FaShoppingCart size={30} />
      </Link>
    </HeaderStyle>
  );
}