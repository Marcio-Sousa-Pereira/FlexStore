
//Action creator
export function alteraValor(novoValor) {
  return {
      type: 'LIST_PRODUCT',
      payload: novoValor
  }
}

export function alteraQuantidade(newProductAddCart) {
  return {
      type: 'QUANT_CART',
      payload: newProductAddCart
  }
}

export function modifyProduct(newQaunt){
  return {
    type: 'QUANT_MODIFY',
      payload: newQaunt
  }
}