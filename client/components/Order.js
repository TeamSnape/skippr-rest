import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import store from '../store';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

const styles = StyleSheet.create({
  order: {
    height: 'auto',
    width: 900,
    marginTop: 30,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'lightblue',
    borderWidth: 1
  }
});

const Order = (props) => {
  const orderItemsArray = [];
  let orderNum = '';
  let fullName = '';
  if (props.order !== undefined) {
    console.log('ZXCV:', Array.isArray(props.order));
    props.order.forEach((orderItem, i) => {
      fullName = orderItem.user_firstname + ' ' + orderItem.user_lastname;
      orderNum = orderItem.fk_orders;
      orderItemsArray.push(<Text style={{fontSize: 18, fontWeight: 'bold'}} key={i}>  • {orderItem.menu_item_name}</Text>);
    });
  }
  return (
    <View style={styles.order}>
      <Text style={{fontSize: 25, fontWeight: 'bold', backgroundColor: 'lightblue', color: 'white', padding: 3}}>ORDER: {orderNum}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', padding: 5}}>CUSTOMER: {fullName}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', padding: 5}}>ITEMS:</Text>
      { orderItemsArray }
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
