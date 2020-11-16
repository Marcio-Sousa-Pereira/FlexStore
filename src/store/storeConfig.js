import { useState } from 'react';
import { createStore, combineReducers } from 'redux';


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
    console.log(state)
    let itemExitente = {};
    if (state.length > 0) {
      for (const item of state) {
        if(item.id === action.payload.id){
            itemExitente = item
        }
      }
    }
   
    console.log(itemExitente)
    if(action.type === 'QUANT_CART'){
      if(Object.keys(itemExitente) > 0){
        console.log("item existe")
        const estado = { ...state };
        estado.splice(estado.indexOf(itemExitente), 1);
        return [
          ...state, 
          {
            quant: itemExitente.quant + 1, 
            product: itemExitente
          }
        ]
      }
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