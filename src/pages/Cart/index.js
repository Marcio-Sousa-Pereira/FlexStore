import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { Container, List, Unidades } from './style';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from "react-icons/md";

import img from '../../assets/tenis.png'


export default function Cart() {
  const productsInCart = useSelector(state => state.addToCart);
  console.log("produtos", productsInCart)
  const dispatch = useDispatch();

  function removeProduct(id) {
    dispatch({
      type: 'REMOVE_PRODUCT',
      id
    })
  }

  function plusAmountInCart(id){
    dispatch({
      type: 'PLUS_AMOUNT_PRODUCT',
      id
    })
  }

  function lessAmountInCart(id){
    dispatch({
      type: 'LESS_AMOUNT_PRODUCT',
      id
    })
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
          {productsInCart.map((listInCart, index) => {
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
                      <MdAddCircleOutline 
                        size="25" 
                        type="button" 
                        onClick={() => plusAmountInCart(listInCart.id)} />

                        <span> {listInCart.amount} </span>
                      <MdRemoveCircleOutline 
                        size="25" 
                        type="button" 
                        onClick={() => lessAmountInCart(listInCart.id)} />
                    </div>

                    <div id="terceira">
                      {(listInCart.preco * listInCart.amount)}
                      <MdDelete 
                        size="25" 
                        type="button" 
                        onClick={()=> removeProduct(listInCart.id)} />
                    </div>
            </Unidades>
          )
        })} 
        </List>
      </Container>
    </>
  );
}
