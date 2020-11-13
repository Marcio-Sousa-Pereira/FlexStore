import { createStore, combineReducers } from 'redux';
//import promiseMiddleware from 'redux-promise';

const initialState = {
  products: []
}

const initialProductsCart = {
  productsCart: []
}

const initialCart = {
  itens: []
}

const reducers = combineReducers({
  products: function(state = initialState, action) {
    //console.log(state, '', action);
    //console.log("estado", state);
    if(action.type === 'LIST_PRODUCT'){
      return {
        ...state,
        products: action.payload
      }
    }else {
      return state
    }
  },

  cartHeader: function(state = initialCart, action) {
    if(action.type === 'QUANT_CART'){
     // console.log(state)
      return {
        ...state,
        itens: action.payload
      }
    }else{
      return state
    }
  },

  cartProducts: function(state = initialProductsCart, action){
    if(action.type === 'PRODUCTS_CART'){
      return {
        ...state,
        productsCart: action.payload
      }
    }else {
      return state
    }
  }

})


//gera um novo estado a partir dos reducers
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;