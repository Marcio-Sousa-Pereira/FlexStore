import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { addProductSuccess, updateAmount } from '../cart/actions';

function* addProduct({ id }){

  const productExist = yield select(
    state => state.addToCart.find(product => product.id === id)
  );


  if(productExist){

    const amount = productExist.amount + 1;

    yield put(updateAmount(id, amount));


  }else {

    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    }
    yield put(addProductSuccess(data))
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CAR_REQUEST', addProduct)
])