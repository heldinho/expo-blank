import { combineReducers } from 'redux';
import { account } from './account';
import { extract } from '../extract';
import { card } from '../card';
import { payment } from '../payment';

const rootReducer = combineReducers({
  user: account,
  extract,
  card,
  payment,
});

export default rootReducer;
