import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import img from '../../assets/tenis.png'
import { MdAddShoppingCart } from 'react-icons/md';

//importando actions
import { addProductRequest } from '../../store/modules/cart/actions';

import Header from '../../components/Header';
import { Container } from './style';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  console.log("array", products)
  //usando dispatch para enviar os dados para os reducers
  const dispatch = useDispatch();
 
  useEffect(() => {
    api.get('products')
      .then(response => {
        setProducts(...products, response.data);
    })
  }, []);

  //função de adicionar produto no carrinho
  function addProductCart(id){
    dispatch(addProductRequest(id));
  }

  return (
    <>
      <Header />
      <Container>
        {products.map(product => (
          <div id="content" href="teste" key={product.id}>
            <img src={img} alt="alguma"></img>
            <strong>R$ {product.preco}</strong>
            <p>{product.nome}</p>
            <p>{product.descricao}</p>
            <button type="submit" onClick={() => addProductCart(product.id)}>
              <div>
                <MdAddShoppingCart></MdAddShoppingCart>
              </div>
              <strong>adicionar ao carrinho</strong>
            </button>
          </div>
        ))}
      </Container>
    </>
  );
}