import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import { Container, List, Unidades } from './style';
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

                    <div id="terceira">
                      {(listInCart.preco * listInCart.amount)}
                      <MdDelete 
                        size="25" 
                        type="button" 
                        onClick={()=> removeProductInCart(listInCart.id)} />
                    </div>
            </Unidades>
          )
        })} 
        </List>
      </Container>
    </>
  );
}
