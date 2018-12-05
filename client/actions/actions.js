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

// export const logIn = () => ({
//   type: types.LOG_IN,
// });

export const logIn = (state) => {
  return (dispatch) => {
    //fetch('http://192.168.0.105:3000/user/login', {
    // fetch('http://redlippedbatfish.herokuapp.com/restaurant/login', {
      fetch('http://redlippedbatfish.herokuapp.com/restaurant/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email: state.emailField,
        password: state.passwordField,
      }),
    })
      .then(res => res.json())
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
    fetch('http://redlippedbatfish.herokuapp.com/user/restaurants')
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
    fetch('http://redlippedbatfish.herokuapp.com/restaurant/orders/1')
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
  const urlString = `http://redlippedbatfish.herokuapp.com/restaurant/orders/${orderNum}`;
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
