import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { getGoals } from '../../actions/goals';
import GoalItem from '../GoalItem'

export class MainScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  componentDidMount() {
    this.props.getGoals();
  }

  render() {
    if (this.props.goals.length === 0) {
      return (
        <Container style={this.styles.message}>
          <Text>You do not have any goals yet, click the "New" button at the top to add a new goal.</Text>
        </Container>
      )
    }

    return (
      <Container>
        <FlatList
          data={this.props.goals}
          renderItem={({item}) => (
            <GoalItem goal={item} />
          )}
          keyExtractor={item => `goal_${3}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    goals: storeState.goals,
  }
};

export default connect(select, { getGoals })(MainScreen);
