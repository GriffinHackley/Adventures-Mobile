import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GoalScreen from '../components/screens/GoalScreen';
import MakeGoalScreen from '../components/screens/MakeGoalsScreen';
import { Button, Text, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default class GoalsNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Goal Screen"
          component={GoalScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Container>
                <Button transparent onPress={() => navigation.navigate('Make Goal Screen')}>
                  <Icon name="plus" size={24} color="blue" />
                </Button>
              </Container>
            )
          })}
        />
        <Stack.Screen name="Make Goal Screen" component={MakeGoalScreen}/>
      </Stack.Navigator>
    );
  }
}
