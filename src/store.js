import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';

const rootReducer = combineReducers({
    budget: budgetReducer
  })

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
