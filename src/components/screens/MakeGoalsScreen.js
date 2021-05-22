import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet, View } from 'react-native';
import { createGoal } from '../../actions/goals';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Button from '../button';
import Number from '../number';


var radio_props = [
{label: 'Distance', value: 0 },
{label: 'Pictures', value: 1 }
];

export class MakeGoalsScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    },
    number: {
      fontSize: 72,
      alignSelf: 'center',
    }
  })

  state = {
    value:0,
    number:0,
  }

  incrementNumber=()=>{
    this.setState({
        number:this.state.number+1
      })
  }

  decrementNumber=()=>{
    if(this.state.number === 0){

    } else {this.setState({
        number:this.state.number-1
      })
    }
  }

  save=()=>{
    var type = "";
    if(this.state.value === 0){
      type = "Distance"
    } else {
      type = "Picture"
    }
    this.props.createGoal(type,this.state.number,1,0,);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
          <Text style={this.styles.number}>{this.state.number}</Text>
          <Button title="+1" onPress={this.incrementNumber}/>
          <Button title="-1" onPress={this.decrementNumber}/>
          <Button title="Save" onPress={this.save}/>
        </View>
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    goals: storeState.goals,
  }
};

export default connect(select, { createGoal })(MakeGoalsScreen);
