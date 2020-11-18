export function addProduct(product){
  return {
    type: 'ADD_PRODUCT_TO_CAR',
    product
  }
}

export function removeProduct(id){
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}

export function decrementAmount(id){
  return {
    type: 'LESS_AMOUNT_PRODUCT',
    id
  }
}

export function plusAmount(id){
  return {
    type: 'PLUS_AMOUNT_PRODUCT',
    id
  }
}