import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Container, List } from './style'
import { modifyProduct } from '../../actions/action1'


import img from '../../assets/tenis.png'
import { connect } from 'react-redux';

function Cart(props) {

  function plusProduct(){
    props.modifyProduct(props.cartState.amount += 1)
  }

  return (
    <>
      <Header />
      <h1>Componente carrinho</h1>
      <Container>
        <List>
            {/* <tr>
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr> */}
          {props.cartState.map((listInCart, index) => {
          return (
            <div key={index}>
             
                  
                    <img src={img} alt="s"></img>
                    <p>
                        {listInCart.nome}
                      <span>{listInCart.descricao}</span>
                      <b>{listInCart.preco}</b>
                    </p>
                  
              
                    <div>
                      <button onClick={plusProduct}>+</button>
                        <span> {listInCart.amount} </span>
                      <button>-</button>
                    </div>
                    <div>{(listInCart.preco * listInCart.amount)}</div>
            </div>
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

function mapActionCreatorsToprops(dispatch){
  return {
    modifyProduct(novaQauntidade){
      //action creator(retorna uma action)
      const action = modifyProduct(novaQauntidade);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProp, mapActionCreatorsToprops)(Cart);