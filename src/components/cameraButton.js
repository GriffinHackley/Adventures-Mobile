import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker'

export default class CameraButton extends React.Component{
  styles = StyleSheet.create({
    image:{
      width: 100,
      height:100,
    },
    placeHolder: {
      width:100,
      height: 100,
      borderWidth:1,
    }
  })

  pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imageSrc: source,
        });
      }
    })
  }

  state = {
    imageSrc:null,
  }

  render() {
    return (
      <TouchableOpacity onPress={this.pickImage}>
        <Icon name="camera" size={60} color="black" />

        {this.state.imageSrc ? (
          <Image source= {this.state.imageSrc} style={this.styles.image} />
        ) : (
          <View styles={this.styles.placeHolder} />
        )}
      </TouchableOpacity>
    );
  }
}
