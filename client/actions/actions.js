// import actionType constants
import * as types from '../constants/actionTypes';
// require('dotenv').config();

export const logEmail = (text) => ({
  type: types.LOG_EMAIL,
  payload: text,
});

export const logPass = (text) => ({
  type: types.LOG_PASSWORD,
  payload: text,
});

export const logIn = (state) => {
  return (dispatch) => {
    fetch('https://infinite-waters-83473.herokuapp.com/restaurant/login')
      .then((user) => {
        dispatch({
          type: types.LOG_IN,
          payload: user,
        });
      });
  };
};

export const getRestaurants = () => {
  return (dispatch) => {
    fetch('https://infinite-waters-83473.herokuapp.com/user/restaurants')
      .then(res => res.json())
      .then((restaurants) => {
        dispatch({
          type: types.GET_RESTAURANTS,
          payload: restaurants,
        });
      });
  };
};

export const getOrders = () => {
  return (dispatch) => {
    fetch('https://infinite-waters-83473.herokuapp.com/restaurant/orders/1')
      .then(res => res.json())
      .then((orders) => {
        dispatch({
          type: types.GET_ORDERS,
          payload: orders,
        });
      });
  };
};

export const completeOrder = orderNum => (dispatch) => {
  const urlString = `https://infinite-waters-83473.herokuapp.com/restaurant/orders/${orderNum}`;
  console.log('QWERTY ACTION CALLED', orderNum, urlString);
  fetch(urlString, {
    method: 'PUT',
  }).then(res => res.json())
    .then((orderNum) => {
      dispatch({
        type: types.COMPLETE_ORDER,
        payload: orderNum,
      });
    });
};
