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
  order: {
    paddingBottom: 20,
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
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23
  }
});

const ManageMenu = (props) => {
  const orderItemsArray = [];
  let orderNum = '';
  let fullName = '';
  if (props.order !== undefined) {
    console.log('ZXCV:', Array.isArray(props.order));
    props.order.forEach((orderItem, i) => {
      fullName = orderItem.user_firstname + ' ' + orderItem.user_lastname;
      orderNum = orderItem.fk_orders;
      orderItemsArray.push(<Text style={{ fontSize: 19, padding: 5, paddingLeft: 9, fontWeight: 'bold' }} key={i}>&bull; {orderItem.menu_item_name}</Text>);
    });
  }
  return (
    <View style={styles.order}>
      <Text style={{ fontSize: 25, padding: 5, color: 'white', backgroundColor: 'lightblue', fontWeight: 'bold'}}>ORDER: {orderNum}</Text>
      <Text style={{ fontSize: 22, padding: 5, paddingLeft: 5, marginTop: 10, fontWeight: 'bold', color: 'black' }}>CUSTOMER: {fullName}</Text>
      <Text style={{ fontSize: 22, padding: 5, paddingLeft: 5, marginTop: 10, fontWeight: 'bold', color: 'black', textDecorationLine: 'underline' }}>ITEMS:</Text>
      { orderItemsArray }
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { props.completeOrder(orderNum); }}> 
          <Text style={styles.buttonText}>Close Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMenu);
