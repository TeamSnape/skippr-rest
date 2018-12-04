import * as types from '../constants/actionTypes';

const initialState = {
  list: [],
  search: '',
};

const restaurantReducer = (state=initialState, action) => {
  let list;
  switch(action.type) {

    case types.GET_RESTAURANTS:
      list = action.payload;

      return {
        ...state,
        list
      };
      
    default:
      return state;
  }
};

export default restaurantReducer;
