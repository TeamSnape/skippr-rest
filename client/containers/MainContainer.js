/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import from child components...
import Logged from '../components/Logged';
// import Login from '../components/Login';
// import Main from '../components/Main';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  
});

// const LoggedOrNot = props.user.logged ? <Login /> : <Main />;

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Ready to see your coffee orders?</Text>
        <Logged />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 1000,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});
