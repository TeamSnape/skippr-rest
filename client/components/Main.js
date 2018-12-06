import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Order from './Order';
import OrderHist from './OrderHist';
import ManageMenu from './ManageMenu';
import Swiper from 'react-native-swiper';


const mapStateToProps = store => ({
  id: store.user.id,
  restaurant: store.user.name,
  orders: store.user.orders,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (id) => {
    dispatch(actions.getOrders(id));
  }
});

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    flexGrow: 1,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 20,
    paddingBottom: 10,
  },
  userName: {
    marginTop: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 1,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    this.props.onLoad(this.props.id);
    this.interval = setInterval(() => { this.props.onLoad(this.props.id); }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  render() {
    let numOfPendingOrders;
    let numOfCompletedOrders;
    let restaurantName = '';
    const pendingOrdersList = [];
    const completedOrdersList = [];
    if (this.props.orders !== undefined) {
      const groupedOrders = groupByUniqueOrders(this.props.orders);
      const groupedOrdersTrue = groupedOrders[0];
      const groupedOrdersFalse = groupedOrders[1];
      restaurantName = groupedOrders[2];
      for (let i = 0; i < groupedOrdersTrue.length; i += 1) {
        pendingOrdersList.push(<Order key={i} order={groupedOrdersTrue[i]} />);
      }
      for (let i = 0; i < groupedOrdersFalse.length; i += 1) {
        completedOrdersList.push(<OrderHist key={i} order={groupedOrdersFalse[i]} />);
      }
      numOfPendingOrders = pendingOrdersList.length;
      numOfCompletedOrders = completedOrdersList.length;
    }
    const scrollViewHeight = '80%';

    return (

      <Swiper 
        loop={false}
        showPagination={false}
        index={0}>

        {/* Pending Order Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'right', color: 'gray', fontStyle: 'italic' }}> Swipe for Order HIstory &rarr; </Text>
          <Text style={styles.userName}>Welcome {this.props.restaurant}!</Text>
          <Text style={styles.header}>Pending Orders: {numOfPendingOrders}</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
            {pendingOrdersList}
          </ScrollView>
        </View>

        {/* Completed Order Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'center', color: 'gray', fontStyle: 'italic' }}> &larr; Swipe for Order HIstory                                                                                           Swipe for Manage Menu &rarr; </Text>
          <Text style={styles.userName}>Welcome {this.props.restaurant}!</Text>
          <Text style={styles.header}>Completed Orders: {numOfCompletedOrders}</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
            {completedOrdersList}
          </ScrollView>
        </View>

        {/* Mnage Menu Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'left', color: 'gray', fontStyle: 'italic' }}> &larr; Swipe for Order History</Text>
          <Text style={styles.userName}>Welcome {this.props.restaurant}!</Text>
          <Text style={styles.header}>Manage Menu</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
          </ScrollView>
        </View>

      </Swiper>
    );
  }
}

function groupByUniqueOrders(inputArray) {
  let restName = '';
  const output = [];

  const outputTrue = [];
  const outputFalse = [];

  const groupByOrderNumTrue = {};
  const groupByOrderNumFalse = {};

  inputArray.forEach((obj) => {
    if (obj.order_ready) {
      restName = obj.rest_name;
      if (!groupByOrderNumTrue[obj.fk_orders]) {
        groupByOrderNumTrue[obj.fk_orders] = [];
      }
      groupByOrderNumTrue[obj.fk_orders].push(obj);
    } else if (!obj.order_ready) {
      restName = obj.rest_name;
      if (!groupByOrderNumFalse[obj.fk_orders]) {
        groupByOrderNumFalse[obj.fk_orders] = [];
      }
      groupByOrderNumFalse[obj.fk_orders].push(obj);
    }
  });
  for(let key in groupByOrderNumTrue) {
    outputTrue.push(groupByOrderNumTrue[key]);
  }
  for(let key in groupByOrderNumFalse) {
    outputFalse.push(groupByOrderNumFalse[key]);
  }

  output.push(outputFalse);
  output.push(outputTrue);
  output.push(restName);

  return output;
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
