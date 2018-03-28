
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window')

const remote = 'https://upload.wikimedia.org/wikipedia/commons/7/74/Image_Background.png';

export default class BackgroundImage extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render() {
    const resizeMode = 'cover';
    const text = 'Login';

    return (
      <View
        style={{
            flex: 1,
            backgroundColor: 'red',
        }}

      >
        <Image
          style={{
            flex: 1,
            resizeMode,
            position: 'absolute',
            width: width,
            height: height,
            justifyContent: 'center',
          }}
          source={{ uri: remote }}
        />
        <View style={{marginTop: 60}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              padding: 40,
              color: 'white'
            }}
          >
            {text}
          </Text>
        </View>
       
        <View style={{marginBottom: 30,marginLeft: 20,marginRight: 20,marginTop: 20}}>
          <TextInput
            style={{height: 50, padding: 10, color: 'white',}}
            placeholder="Username"
          />
          <TextInput
            style={{height: 50, padding: 10, color: 'white'}}
            placeholder="Password"
          />
        </View>
       
        <View style={{marginBottom: 30,marginLeft: 20,marginRight: 20,marginTop: 20}}>
          <Button 
          style={{marginBottom: 30,marginLeft: 20,}}
          onPress={()=> {
            Alert.alert('Sucsess!!');
          }}
          title="Login"
          />  
        </View>
        
      </View>
    );
  }
}





AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
