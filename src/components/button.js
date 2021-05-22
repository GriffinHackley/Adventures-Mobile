import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      margin: 24,
      borderRadius: 24,
      padding: 15
    },
    title: {
      fontSize: 32,
      color: 'white',
      alignSelf: 'center',
    }
  });

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.styles.button}>
          <Text style={this.styles.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
