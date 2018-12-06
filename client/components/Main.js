import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Order from './Order';
import OrderHist from './OrderHist';
import ManageMenu from './ManageMenu';
import Swiper from 'react-native-swiper';


const mapStateToProps = store => ({
  restaurant: store.user.name,
  orders: store.user.orders,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(actions.getOrders());
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
    this.props.onLoad();
    this.interval = setInterval(this.props.onLoad, 5000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  render() {
    let numOfOrders;
    const ordersList = [];
    if (this.props.orders !== undefined) {
      const groupedOrders = groupByUniqueOrders(this.props.orders);
      numOfOrders = groupedOrders.length;
      for (let i = 0; i < groupedOrders.length; i += 1) {
        ordersList.push(<Order key={i} order={groupedOrders[i]} />);
      }
    }
    const scrollViewHeight = '80%';

    return (

      <Swiper 
        loop={false}
        showPagination={false}
        index={0}>

        {/* Pending Order Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'right', color: 'gray', fontStyle: 'italic' }}> Swipe for testing 123 &rarr; </Text>
          <Text style={styles.userName}>Welcome {}!</Text>
          <Text style={styles.header}>Pending Orders: {numOfOrders}</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
            {ordersList}
          </ScrollView>
        </View>

        {/* Completed Order Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'right', color: 'gray', fontStyle: 'italic' }}> Swipe for testing 123 &rarr; </Text>
          <Text style={styles.userName}>Welcome {}!</Text>
          <Text style={styles.header}>Completed Orders: {numOfOrders}</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
            {ordersList}
          </ScrollView>
        </View>

        {/* Mnage Menu Page */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ width: '100%', fontSize: 20, textAlign: 'right', color: 'gray', fontStyle: 'italic' }}> Swipe for testing 123 &rarr; </Text>
          <Text style={styles.userName}>Welcome {}!</Text>
          <Text style={styles.header}>Manage Menu: {numOfOrders}</Text>
          <ScrollView style={styles.scroll} style={{ width: '100%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, height: scrollViewHeight, flexGrow: 1 }}>
            {ordersList}
          </ScrollView>
        </View>

      </Swiper>
    );
  }



}

function groupByUniqueOrders(inputArray) {
  const output = [];
  const groupByOrderNum = {};
  inputArray.forEach((obj) => {
    if (!groupByOrderNum[obj.fk_orders]) {
      groupByOrderNum[obj.fk_orders] = [];
    }
    groupByOrderNum[obj.fk_orders].push(obj);
  });
  for(let key in groupByOrderNum) {
    output.push(groupByOrderNum[key]);
   }
  return output;
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
