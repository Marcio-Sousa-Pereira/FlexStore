import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import img from '../../assets/tenis.png'
import { MdAddShoppingCart } from 'react-icons/md';
//responsável por ligar o componete ou estado central
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { Container } from './style';
import { alteraValor, alteraQuantidade } from '../../actions/action1'


function Dashboard(props) {
  //const [productx, setProductx] = useState([]);
  
  useEffect(() => {
    api.get('products')
      .then(response => {
      props.alterarEstado(response.data);
    })
  }, []);

  function addProductCart(product){
          props.alteraQuantidade(product);
  }

  return (
    <>
      <Header />
      <Container>
        {props.productState.map((product, index) => (
          <div href="teste" key={index}>
            <img src={img} alt="alguma"></img>
            <strong>R$ {product.preco}</strong>
            <p>{product.nome}</p>
            <p>{product.descricao}</p>
            <button type="submit" onClick={() => addProductCart(product)}>
              <div>
                <MdAddShoppingCart></MdAddShoppingCart>
                <span>{props.stateQuant.amount}</span>
              </div>
              <strong>adicionar ao carrinho</strong>
            </button>
          </div>
        ))}
      </Container>
    </>
  );
}

//mapeando o estado para o componente via propriedade
function mapStateToProps(state){
  return {
    productState: state.products.products,
    stateQuant: state.cartHeader
  }
}

//mapeando 
function mapActionCreatorsToprops(dispatch){
  return {
    alterarEstado(novoNumero){
      //action creator(retorna uma action)
      const action = alteraValor(novoNumero);
      dispatch(action);
    },

    alteraQuantidade(productCar){
      //action creator(retorna uma action)
      const action = alteraQuantidade(productCar);
      dispatch(action);
    }
  }
}
//fazendo a ligação do component com o estado
export default connect(mapStateToProps, mapActionCreatorsToprops)(Dashboard);