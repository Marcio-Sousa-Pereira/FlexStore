export function addProductRequest(id){
  return {
    type: 'ADD_PRODUCT_TO_CAR_REQUEST',
    id
  }
}

export function addProductSuccess(product){
  return {
    type: 'ADD_PRODUCT_TO_CAR_SUCCESS',
    product
  }
}

export function removeProduct(id){
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}

export function updateAmount(id, amount){
  return {
    type: 'UPDATE_AMOUNT',
    id,
    amount
  }
}