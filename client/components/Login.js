import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, NavigatorIOS, TouchableOpacity } from 'react-native';
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
    backgroundColor: 'white',
    textAlign: 'center',
    borderWidth: 1, 
    borderColor: 'lightgray',
    borderRadius: 10,
    color: 'black'
  },
  formTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formBox: {
    marginTop: 40,
    padding: 30,
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 20
  },
  button: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderWidth: 3,
    padding: 5,
    marginBottom: 15
  },
  login: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 27,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10
  },
});

const Login = (props) => {
  return (
    <View>
      <Text style={styles.subtitle}>Ready to see your coffee orders?</Text>
      <View style={styles.formBox}>
        <Text style={styles.formTitle}>Login</Text>
        <TextInput autoCapitalize='none' onChangeText={props.logemail} placeholder="Email please!" style={styles.form} type="text" />
        <TextInput autoCapitalize='none' onChangeText={props.logpass} placeholder="Password please!" style={styles.form} type="password" />
        {/* <Button onPress={props.login} title="Log in!" color="lightblue" /> */}
        <TouchableOpacity style={styles.button} onPress={() => { props.login(props.user); }}>
          <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
