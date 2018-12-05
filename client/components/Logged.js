import React from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login';
import Main from '../components/Main';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  
});

function Logged(props) {
  const checkLog = props.user.logged;
  if (!checkLog) {
    return <Login />;
  }
  return <Main />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Logged);
