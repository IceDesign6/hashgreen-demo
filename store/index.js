import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk'

const defaultState = {
  showModal: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_MODAL': {
      return { ...state, showModal: action.payload }
    }
    default:
      return state;
  }
}

const makeStore = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug: true });