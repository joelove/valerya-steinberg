import { HomeActionTypes } from 'constants/action-types';

const initialState = {};

function sampleReducer(state) {
  return state;
}

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case HomeActionTypes.SAMPLE:
      return sampleReducer(state, payload);
  }

  return state;
};
