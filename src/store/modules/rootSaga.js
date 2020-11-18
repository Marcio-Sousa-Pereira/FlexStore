import { all } from 'redux-saga/effects';

import product from './cart/sagas';

export default function* rootSaga(){
  return yield all([
    product,
  ])
}