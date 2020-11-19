import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { Container, Table, Footer } from './style';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from "react-icons/md";
import img from '../../assets/tenis.png'
//importando actions 
import { 
  removeProduct,  
  updateAmount 
} from '../../store/modules/cart/actions';


export default function Cart() {
  const productsInCart = useSelector(state => state.addToCart);
  const dispatch = useDispatch();
  var value = 0;

  
    productsInCart.map(list => {
      value += (list.amount * list.preco)
    })

  console.log("produtos", value)

  //função de remover produto no carrinho
  function removeProductInCart(id) {
    dispatch(removeProduct(id));
  }

  function plusAmountInCart(product){
    dispatch(updateAmount(product.id, product.amount - 1))
    
  }

  function lessAmountInCart(product){
    dispatch(updateAmount(product.id, product.amount + 1))
  }

  return (
    <>
    <Header />
      <Container>
        <div className="content" >
        <table>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead> 
          <tbody>
          {productsInCart.map((listInCart, index) => {
            return (
              <tr key={index} id="tr-content">
                  <td className="td-first">
                    <img src={img} alt="s"></img>
                    <div className="first">
                    {listInCart.nome}
                    <span>{listInCart.descricao}</span>
                    <b>R$ {listInCart.preco}</b>
                    </div>
                  </td>   
                  <td>
                    <div className="second">
                      <MdRemoveCircleOutline 
                        size="25" 
                        type="button" 
                        onClick={() => plusAmountInCart(listInCart)} />
                        <input type="text" readOnly value={listInCart.amount} />
                      <MdAddCircleOutline 
                        size="25" 
                        type="button" 
                        onClick={() => lessAmountInCart(listInCart)} />
                    </div>
                  </td>
                  <td>
                    <strong>R$ {(listInCart.preco * listInCart.amount)}</strong>
                  </td>
                  <td>
                    <MdDelete 
                      size="25" 
                      type="button" 
                      onClick={()=> removeProductInCart(listInCart.id)} />
                  </td> 
                </tr>
                )
              })} 
            </tbody>
          </table>
          <footer>
            <button>FINALIZAR COMPRA</button>
            <div>
              <span>TOTAL</span>
              <strong>R$ {value}</strong>
            </div>
          </footer>
        </div>
      </Container>
    </>
  );
}
