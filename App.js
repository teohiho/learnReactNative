import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name} ! </Text>
    );
  }
}
export default class LotOfGreetings extends Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Greeting name='Teohiho' />
        <Greeting name='Thu Hien' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotOfGreetings);
