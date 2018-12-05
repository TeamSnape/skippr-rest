import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './userReducer';
import restaurantReducer from './restaurantReducer';
import orderReducer from './orderReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  user: userReducer,
  restaurant: restaurantReducer,
  order: orderReducer,
});

// make the combined reducers available for import
export default reducers;
