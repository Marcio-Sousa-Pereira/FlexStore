import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, List } from './style'


import img from '../../assets/tenis.png'
import { connect } from 'react-redux';

function Cart(props) {

  return (
    <>
      <Header />
      <h1>Componente carrinho</h1>
      <Container>
        <List>
            <tr>
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr>
        {props.cartState.map((listInCart, index) => {
          return (
            <tr key={index}>
              <td> 
                  <div>
                    <img src={img} alt="s"></img>
                    <p>
                        {listInCart.nome}
                      <span>{listInCart.descricao}</span>
                      <b>{listInCart.preco}</b>
                    </p>
                  </div>
              </td>
              <td>
                    <button>+</button>
                      <span>  4  </span>
                    <button>-</button>
              </td>
              <td> {listInCart.preco} </td>
            </tr>  
          )
        })} 
        </List>
      </Container>
    </>
  );
}

function mapStateToProp(state){
  return {
    cartState: state.cartHeader
  }
}

export default connect(mapStateToProp)(Cart);