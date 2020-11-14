import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderStyle from './style';

function Header(props) {

  return (
    <HeaderStyle>
      <Link to="/cart">
      <div>
        <p>Meu carrinho</p>
        <p>({props.stateProductCart.length}) itens</p>
      </div>
      <FaShoppingCart size={30} />
      </Link>
    </HeaderStyle>
  );
}

//mapeando statado central para o componete via propiedade
function mapStateToProp(state){
  return {
    stateProductCart: state.cartHeader
  }
}

export default connect(mapStateToProp)(Header);