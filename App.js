import React, { Component } from 'react';
import { View, TextInput, AppRegistry, Image } from 'react-native';
 
export default class Background extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Image_Background.png'
    };
    return(

      <View style={{flex:1}}>
        <Image style={{flex:1}} source={pic}  />
        <View>
          <TextInput style={{height: 40}} placeholder="User"/>
        </View>
      </View>

    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => Background );