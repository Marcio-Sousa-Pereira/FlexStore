import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Container, List, Unidades } from './style'
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from "react-icons/md";
import { modifyProduct } from '../../actions/action1'


import img from '../../assets/tenis.png'
import { connect } from 'react-redux';

function Cart(props) {

  // function plusProduct(){
  //   props.modifyProduct(props.cartState.amount += 1)
  // }

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
            <Unidades key={index}>
                    <div id="primeira">
                      <img src={img} alt="s"></img>
                      <div id="sub-primeira">
                        {listInCart.nome}
                        <span>{listInCart.descricao}</span>
                        <b>{listInCart.preco}</b>
                      </div>
                    </div>
                    
                    <div id="segunda">
                      <MdAddCircleOutline size="25" type="button" />
                        <span> {listInCart.amount} </span>
                      <MdRemoveCircleOutline size="25" type="button" />
                    </div>

                    <div id="terceira">
                      {(listInCart.preco * listInCart.amount)}
                      <MdDelete size="25" type="button" />
                    </div>
            </Unidades>
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