import { createStore, combineReducers } from 'redux';
//import promiseMiddleware from 'redux-promise';

const initialState = {
  products: []
}


const reducers = combineReducers({
  products: function(state = initialState, action) {
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

  cartHeader: function(state = [], action) {
    if(action.type === 'QUANT_CART'){
      return [
        ...state, action.payload
      ]
    }else{
      return state
    }
  }
})


//gera um novo estado a partir dos reducers
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;