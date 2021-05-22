import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAdventure} from '../actions/adventures'
import { connect } from 'react-redux'

export class EndButton extends React.Component{
  styles = StyleSheet.create({
  })

  endAdventure = () => {
    console.log("gfbndshji");
    console.log(this.props.props);
    this.props.createAdventure(this.props.props.title);

    //save data
      //save polyline coordinates
      //save markers (with pictures and coords)
    //go back to main screen
  }

  render() {
    return (
      <TouchableOpacity onPress={this.endAdventure}>
        <Icon name="remove" size={60} color="red" />
      </TouchableOpacity>
    );
  }
}

select = (storeState) => {
  return {
    adventures: storeState.adventures,
  }
};
const mapDispatchToProps = {createAdventure};

export default connect (select, mapDispatchToProps)(EndButton);
