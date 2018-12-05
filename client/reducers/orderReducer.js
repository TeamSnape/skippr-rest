import * as types from '../constants/actionTypes';

const initialState = {
  orders: [],
};

const orderReducer = (state=initialState, action) => {
  switch(action.type) {

    // case types.SOMETHING:
    //   let something = 'something';

    //   return {
    //     ...state,
    //   };
      
    default:
      return state;
  }
};

export default orderReducer;
