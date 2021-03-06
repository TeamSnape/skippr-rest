import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import store from '../store';
import * as actions from '../actions/actions';



const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
  completeOrder: (orderNum) => {
    dispatch(actions.completeOrder(orderNum));
  }

});

const styles = StyleSheet.create({
  menu: {
    paddingBottom: 5,
    height: 'auto',
    width: 850,
    marginTop: 14,
    marginBottom: 40,
    marginRight: '7%',
    marginLeft: '7%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 8
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  button: {
    padding: 7,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23
  }
});

const MenuItem = (props) => {
  return (
    <View style={styles.menu}>
      <Text style={{ fontSize: 25, padding: 2, color: 'white', backgroundColor: 'lightblue', fontWeight: 'bold'}}></Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> 
        <Text style={{ fontSize: 25, padding: 5, paddingLeft: 5, marginTop: 10, fontWeight: 'bold', color: 'black', textAlign: 'left' }}>Item Name: {props.menuItemName}</Text>
        <Text style={{ fontSize: 25, padding: 5, paddingLeft: 5, marginTop: 10, fontWeight: 'bold', color: 'black', textAlign: 'right' }}>Item Price: ${props.menuItemPrice}</Text>
      </View>
      <TouchableOpacity style={{
        padding: 7,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 15
      }}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 23
        }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
