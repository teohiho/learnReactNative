import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    },1000);
  }
  render(){
    let display = this.state.isShowingText ? this.props.text: ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component{
  render(){
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes bkining is so great' />
        <Text style={styles.red}>COLOR</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

//style
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);