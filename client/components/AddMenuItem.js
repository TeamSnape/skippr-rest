import React from 'react';
import { connect } from 'react-redux';
import {View, Button, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import store from '../store';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

const styles = StyleSheet.create({
  form: {
    height: 50,
    width: 300,
    fontSize: 20,
    marginTop: 10,
    backgroundColor: 'white',
    textAlign: 'left',
    borderWidth: 1, 
    borderColor: 'lightgray',
    borderRadius: 10,
    color: 'black'
  },
  button: {
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderWidth: 3,
    padding: 7,
    marginBottom: 15,
    marginLeft: 15
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const AddMenuItem = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 22, padding: 5, paddingLeft: 5, marginTop: 18, fontWeight: 'bold', color: 'black' }}>ITEM NAME: &nbsp;</Text>
      <TextInput autoCapitalize='none' placeholder="&nbsp;Item Name" style={styles.form} type="text" />

      <Text style={{ fontSize: 22, padding: 5, paddingLeft: 5, marginTop: 18, fontWeight: 'bold', color: 'black' }}>&nbsp; ITEM PRICE: &nbsp;</Text>
      <TextInput autoCapitalize='none' placeholder="&nbsp;Price" style={styles.form} type="password" />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuItem);
