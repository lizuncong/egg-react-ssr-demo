import CHANGE_MORE_VALUE from './types';

const defaultState = {
  renderMode: 'server',
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case CHANGE_MORE_VALUE:
      return { ...state, ...(action.payload || {}) };
    default:
      return state;
  }
}
