import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home.js'
import Exponent, { Constants, ImagePicker, registerRootComponent } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'HOME'
    }
  }

  render() {
    if (this.state.screen === 'HOME') {
      return (
        <Home />
      )
    }
  }
}