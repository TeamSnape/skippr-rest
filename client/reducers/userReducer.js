import * as types from '../constants/actionTypes';

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
  yelplink: '',
  imagelink: '',
  orders: [],
  logged: false
};

const userReducer = (state=initialState, action) => {

  let rest_id;
  let rest_name;
  let rest_email;
  let rest_password;
  let rest_address;
  let rest_city;
  let rest_state;
  let rest_zipcode;
  let rest_phone;
  let rest_yelplink;
  let rest_imagelink;
  let logged;

  switch(action.type) {

    case types.LOG_EMAIL:
      emailField = action.payload.toLowerCase();
      return {
        ...state,
        emailField,
      };

    case types.LOG_PASSWORD:
      passwordField = action.payload.toLowerCase();

      return {
        ...state,
        passwordField,
      };
    
    case types.LOG_IN:
      const { rest_id, rest_name, rest_email, rest_password, rest_address, rest_city, rest_state, rest_zipcode, rest_phone, rest_yelplink, rest_imagelink} = action.payload;

      id = rest_id;
      name = rest_name;
      email = '';
      password = '';
      address = rest_address;
      city = rest_city;
      state = rest_state;
      zipcode = rest_zipcode;
      phone = rest_phone; 
      yelplink = rest_yelplink;
      imagelink = rest_imagelink;
      logged = true;
      return {
        ...state,
        id,
        name,
        email,
        password,
        address,
        city,
        state,
        zipcode,
        phone,
        yelplink,
        imagelink,
        logged,
      };
      // fetch('http://192.168.86.234:3000/user/login', {
      //   method: 'POST',
      //   mode: 'cors',
      //   headers: {
      //     'Content-Type': 'application/json; charset=utf-8',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   body: JSON.stringify({
      //     email: state.emailField,
      //     password: state.passwordField,
      //   }),
      // })
      //   .then(res => res.json())
      //   .then((data) => {
      //     id = data['user_id'];
      //     firstName = data['user_firstname'];
      //     lastName = data['user_lastname'];
      //     email = data['user_email'];
      //     phone = data['user_phone'];
      //     emailField = '';
      //     passwordField = '';
      //     logged = true;
      //     // console.log(state);
      //     return {
      //       ...state,
      //       // id,
      //       // firstName,
      //       // lastName,
      //       // email,
      //       // phone,
      //       // emailField,
      //       // passwordField,
      //       logged,
      //     };
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    case types.GET_ORDERS:
      console.log(action.payload);
      let orders = action.payload;

      return {
        ...state,
        orders,
      };

    default:
      return state;
  }
};

export default userReducer;
