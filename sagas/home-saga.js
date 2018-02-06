import { take, fork } from 'redux-saga/effects';

import { HomeActionTypes } from 'constants/action-types';
import { HomeActions } from 'actions';

export function* sampleHomeSaga() {
  return yield HomeActions;
}

export default function* entitiesFlow() {
  while (true) {
    const { type, payload } = yield take([
      HomeActionTypes.SAMPLE,
    ]);

    switch (type) {
      case HomeActionTypes.SAMPLE:
        yield fork(sampleHomeSaga, payload);
        break;
    }
  }
}
