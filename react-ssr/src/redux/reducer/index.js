import { combineReducers } from 'redux';
import user from 'pages/user/reducer';
import product from 'pages/product/list/reducer';
import globalReducers from './global';

export default combineReducers({
  user,
  product,
  global: globalReducers
});
