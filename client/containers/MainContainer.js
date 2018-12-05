/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text, StyleSheet, NavigatorIOS } from 'react-native';
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
        <Logged navigator={this.props.navigator}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 1000,
    marginLeft: 55,
    marginRight: 55,
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center'
  },
});
