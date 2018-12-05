import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Order from './Order';
import Swiper from 'react-native-swiper';

// testing purposes
import Login from './Login'

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
    width: 1000,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 20
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

    const ordersList = [];
    if (this.props.orders !== undefined) {
      const groupedOrders = groupByUniqueOrders(this.props.orders);
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

        {/* Order History Page */}
        <View>
          <Text style={{ fontSize: 20, textAlign: 'right', color: 'gray', fontStyle: 'italic' }}> Swipe for testing 123 &rarr; </Text>
          <Text style={styles.userName}>Welcome {this.props.restaurant}!</Text>
          <Text style={styles.header}>Order History</Text>
          <ScrollView style={styles.scroll} contentContainerStyle={{ height: scrollViewHeight, flexGrow: 1, alignItems: 'center' }}>
            {ordersList}
          </ScrollView>
        </View>

        <View>
          <Text>TESTING 1 2 3</Text>
        </View>

         <View>
          <Text>TESTING 4 5 6</Text>
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
