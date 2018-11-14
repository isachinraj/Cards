import { combineReducers } from 'redux';
import CardReducer from './reducer_cards';

const rootReducer = combineReducers({
  data: CardReducer
});

export default rootReducer;
