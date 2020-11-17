import produce from 'immer';


export default function addToCart(state = [], action){
  console.log("action chegou", action.product)
  console.log("estado depois de chegar", state)
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CAR':
      return produce(state, draft => {
        const indice = draft.findIndex(product => product.id === action.product.id);
    
            if(indice >= 0){
                draft[indice].amount += 1;
            }else{
              draft.push({
                  ...action.product,
                    amount: 1,
            });
          }
      });

    case 'REMOVE_PRODUCT':
      return produce(state, draft => {
        const indice = draft.findIndex(product => product.id === action.id);

        if(indice >= 0){
          draft.splice(indice, 1)
        }
      });
      case 'LESS_AMOUNT_PRODUCT':
        return produce(state, draft => {
          const indice = draft.findIndex(product => product.id === action.id);

          if(draft[indice].amount <= 1){
            draft.splice(indice, 1)
          }else if(indice >= 0){
            draft[indice].amount -= 1;
          }
        });
      case 'PLUS_AMOUNT_PRODUCT': 
        return produce(state, draft => {
          const indice = draft.findIndex(product => product.id === action.id);

          if(indice >= 0){
            draft[indice].amount += 1;
          }
        })
    default:
      return state
  }
}

