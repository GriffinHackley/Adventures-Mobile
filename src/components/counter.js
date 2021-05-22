import React from 'react';
import { Text, StatusBar, SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import Button from './button';
import Number from './number'

export default class Counter extends React.Component {
  state = {number:0};

  incrementNumber=()=>{
    this.setState({
        number:this.state.number+1
      })
  }

  decrementNumber=()=>{
    this.setState({
        number:this.state.number-1
      })
  }

  render() {
    return (
      <SafeAreaView style={{flexDirection:'column', justifyContent:'space-between'}}>
        <Text style={styles.number}>{this.state.number}</Text>
        <Button title="+1" onPress={this.incrementNumber}/>
        <Button title="-1" onPress={this.decrementNumber}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: 72,
    alignSelf: 'center',
  }
});
