import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  logemail: (text) => {
    dispatch(actions.logEmail(text));
  },
  logpass: (text) => {
    dispatch(actions.logPass(text));
  },
  login: (event) => {
    dispatch(actions.logIn(event));
  }
});

const styles = StyleSheet.create({
  form: {
    height: 50,
    width: 400,
    fontSize: 20,
    marginTop: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  formBox: {
    marginTop: 10,
    padding: 10
  }

});

const Login = (props) => {
  return (
    <View style={styles.formBox}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput onChangeText={props.logemail} placeholder="Email please!" style={styles.form} type="text" />
      <TextInput onChangeText={props.logpass} placeholder="Password please!" style={styles.form} type="password" />
      {/* <Button onPress={props.login} title="Log in!" color="lightblue" /> */}
      <Button onPress={() => { props.login(props.user); }} title="Log in!" color="lightblue" />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
