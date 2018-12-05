import { NavigatorIOS } from 'react-native';
import React, { Component } from 'react';
import Main from './Main';
import MainContainer from '../containers/MainContainer';

export default class NavigatorIOSApp extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <NavigatorIOS 
			  style={{flex: 1, alignSelf: 'stretch'}}
        initialRoute={{component: MainContainer, title: 'Welcome'}}
				navigationBarHidden={true}
      />
    )
  }
}