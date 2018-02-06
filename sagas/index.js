import { fork } from 'redux-saga/effects';

import homeSaga from 'sagas/home-saga';

export default function* sagas() {
  yield [
    fork(homeSaga),
  ];
}
