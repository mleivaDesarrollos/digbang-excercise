import { SET_AMOUNT, SET_TERM } from './actionTypes';

export const setAmount = (amount) => ({ type: SET_AMOUNT, payload: amount });

export const setTerm = (term) => ({ type: SET_TERM, payload: term });
