import { SET_AMOUNT, SET_TERM } from './actionTypes';

const minAmount = 5000;
const minTerm = 3;

export const initialState = {
  amount: {
    current: minAmount,
    min: minAmount,
    max: 50000,
  },
  term: {
    current: minTerm,
    min: minTerm,
    max: 24,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        amount: {
          ...state.amount,
          current: action.payload,
        },
      };
    case SET_TERM:
      return {
        ...state,
        term: {
          ...state.term,
          current: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
