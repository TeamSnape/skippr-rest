import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Order from './Order';

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
  },
  userName: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
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
      // console.log('XFTER:\n', Array.isArray(groupedOrders));
      for (let i = 0; i < groupedOrders.length; i += 1) {
        ordersList.push(<Order key={i} order={groupedOrders[i]} />);
      }
    }
    return (
      <ScrollView style={styles.scroll}>
        <Text style={styles.userName}>Welcome {this.props.restaurant}!</Text>
        {ordersList}
      </ScrollView>
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
  console.log(output.length);
  return output;
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
