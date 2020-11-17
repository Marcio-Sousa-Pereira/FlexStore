import { createStore, combineReducers } from 'redux';
import produce from 'immer';

const initialState = {
  products: []
}

const reducers = combineReducers({
  products: function(state = initialState, action) {
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
          return produce(state, draft => {

              const indice = draft.findIndex(payload => payload.id === action.payload.id);

              if(indice >= 0){
                draft[indice].amount += 1;
              }else{
                draft.push({
                  ...action.payload,
                  amount: 1,
                });
              }
          })
    }else{
      return state
    }
  },

  modify: function(state = [], action) {
    if(action.type === 'QUANT_MODIFY'){
      return {
        ...state,
        products: action.payload
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