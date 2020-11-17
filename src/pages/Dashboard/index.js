import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import img from '../../assets/tenis.png'
import { MdAddShoppingCart } from 'react-icons/md';

//responsável por ligar o componete ou estado central
//import { connect } from 'react-redux';

import Header from '../../components/Header';
import { Container } from './style';
//import { alteraValor, alteraQuantidade } from '../../actions/action1'


export default function Dashboard(props) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  
 
  useEffect(() => {
    api.get('products')
      .then(response => {
        setProducts(...products, response.data);
    })
  }, []);

  function addProductCart(product){
    dispatch({
      type: 'ADD_PRODUCT_TO_CAR',
      product
    })
  }
  return (
    <>
      <Header />
      <Container>
        {products.map((product, index) => (
          <div href="teste" key={index}>
            <img src={img} alt="alguma"></img>
            <strong>R$ {product.preco}</strong>
            <p>{product.nome}</p>
            <p>{product.descricao}</p>
            <button type="submit" onClick={() => addProductCart(product)}>
              <div>
                <MdAddShoppingCart></MdAddShoppingCart>
                    <span> 4 </span>
              </div>
              <strong>adicionar ao carrinho</strong>
            </button>
          </div>
        ))}
      </Container>
    </>
  );
}