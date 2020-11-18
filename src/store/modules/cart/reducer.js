import produce from 'immer';


export default function addToCart(state = [], action){
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CAR_SUCCESS':
      return produce(state, draft => {
        
          draft.push(action.product)

      });

    case 'REMOVE_PRODUCT':
      return produce(state, draft => {
        const indice = draft.findIndex(product => product.id === action.id);

        if(indice >= 0){
          draft.splice(indice, 1)
        }
      });

      case 'UPDATE_AMOUNT': {
        if(action.amount <= 0){
          return state;
        }else{
          return produce(state, draft => {
            const indice = draft.findIndex(product => product.id === action.id);
  
            if(indice >= 0){
              draft[indice].amount = Number(action.amount);
            }
            // if(draft[indice].amount <= 1){
            //   draft.splice(indice, 1)
            // }else if(indice >= 0){
            //   draft[indice].amount -= 1;
            // }
          });
        }
      }
    default:
      return state
  }
}

