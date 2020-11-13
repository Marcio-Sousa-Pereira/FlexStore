import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container } from './style'
//import { MdAdd } from 'react-icons/md';
import { connect } from 'react-redux';

function Cart(props) {
  const [itenRepeat, setItenRepeat] = useState([props.cartState]);

  function itensRepetidos(){
    if(props.cartState.id ==)
    setItenRepeat()
  }
  //function Plus
  return (
    <>
      <Header />
      <h1>Componente carrinho</h1>
      <Container>
        <table>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
          {props.cartState.map((Itens, index) => {
            return (
              <tr key={index}>
                <td>{Itens.nome}{Itens.preco}</td>
                <td>
                  <button type="submit" onClick={() => itensRepetidos}> + </button>
                    <span type="number"> 1 </span>
                  <button type="submit"> - </button>
                  </td>
                <td></td>
              </tr>
            )
          })}
          
        </table>
      </Container>
    </>
  );
}

function mapStateToProp(state){
  return {
    cartState: state.cartHeader.itens
  }
}

export default connect(mapStateToProp)(Cart);